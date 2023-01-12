import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Logo from "../UI/Molecules/Logo"
import styles from "./Login.module.css";
import Footer from "../Footer/Footer";
import { HeaderComponent } from "../LandingPage/LandingPage";
import axios from "../../api/axios";
import { useAuth } from "../../context/authContext";
import { message } from "antd";


const Login = () => {

    const [email, setEmail] = useState("testuser@atonis.com");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("test-user@pass");
    const [passwordError, setPasswordError] = useState("");
    const [authError, setAuthError] = useState("");
    const {login}  = useAuth();
    const [messageApi, contextHolder] = message.useMessage();
    
    
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Test credentials pre-populated. Just click the "Sign in" button',
        });
    };
    useEffect(() => {
        success();
    }, [])

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === "email") {
            setEmail(value);
        } else {
            setPassword(value); 
        }
    }  

    const validate = (value, type) => {
        if(type === "email") { //case for email
            const valid = String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if(!valid) {
                setEmailError("Please enter a valid email address");
                return false;
            } else {
                setEmailError("");
                return true;
            }
            
        } else { // case for password
            
            if(value && value.length >= 6) {
                setEmailError("");
                return true;
            } else { 
                setPasswordError("Password character should be a minimum of 6 characters");
                return false;
            }
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(email, "email") && validate(password, "password")) {
            axios
            .post("auth/login", {
              email,
              password
            }, {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            })
            .then((response) => {
                const {_id, username, email, accessToken, role} = response.data || {};
                const user = {
                    username, 
                    email, 
                    id: _id, 
                    role
                }

            localStorage.setItem("access_token", accessToken);
                login(user);
                navigate("/dashboard/projects", {replace: true, state: {}});

            }).catch(err => {
                const {status} = err.response || {};
                if(status == "404") {
                    setAuthError("Please enter valid username and password")
                } else {
                    console.log("Other");
                }
            })
        } else {
            console.log("Login failure");
        }
    }

    return (
    <>
        {contextHolder}
        <div className= {styles.container}>
            <HeaderComponent showBtns = {true}/>
            <div className= {styles.formContainer}>
                <Logo className = {styles.logo}/>
                <form className= {styles.form} onSubmit={handleSubmit}>
                    <span>Sign in</span>    
                    <div>
                        <label htmlFor = "email">Email</label>
                        <input id = "email" name = "email" placeholder="Enter your email" value = {email} onChange = {handleChange}/>
                        <span className= {styles.errorMessage}>{emailError}</span>
                    </div>
                    <div>
                        <label htmlFor = "password">Password</label>
                        <input type = "password"  id = "password" name = "password" placeholder="Enter your password" value = {password} onChange = {handleChange} />
                        <span className= {styles.errorMessage}>{passwordError}</span>
                    </div>
                    <button className= {styles.btn}>Sign in</button>
                    <Link to = "/signup"><span className={styles.createAccLabel}>Create new account</span></Link>
                </form>
                {authError ? <div className= {styles.loginError}>
                        {authError}
                    </div>: null}
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Login;