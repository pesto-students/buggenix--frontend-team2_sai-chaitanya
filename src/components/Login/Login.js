import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { oktaConfig } from "../../config/oktaConfig";
import Logo from "../../UI/Molecules/Logo/Logo"
import styles from "./Login.module.css";
import {OktaAuth}  from '@okta/okta-auth-js';
import { Header } from "antd/lib/layout/layout";
import Footer from "../Footer/Footer";
import { HeaderComponent } from "../LandingPage/LandingPage";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
const Login = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const axiosPrivate = useAxiosPrivate();

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
            .post("api/auth/login" , {
              "email":email,
              "password": password
            },  {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            .then((response) => {
                // Navigate("/dashboard");
              localStorage.setItem("access_token",response.data.accessToken)
            });
            setEmail("");
            setPassword("");
        } else {
            console.log("Login failure");
        }
    }
    const test =()=>{
        // axiosPrivate.get("api/auth/check").then((res)=>{
        //     console.log("response",res);
        // })
        axiosPrivate.get("api/auth/check").then((res)=>{
            console.log("83",res)
        })
    }

    return (
    <>
        <div className= {styles.container}>
            <HeaderComponent showBtns = {true}/>
            <div className= {styles.formContainer}>
                <Logo className = {styles.logo}/>
                <form className= {styles.form} onSubmit={handleSubmit}>
                    <span>Sign in</span>    
                    <div>
                        <label for = "email">Email</label>
                        <input id = "email" name = "email" placeholder="Enter your email" value = {email} onChange = {handleChange}/>
                        <span className= {styles.errorMessage}>{emailError}</span>
                    </div>
                    <div>
                        <label for = "password">Password</label>
                        <input type = "password"  id = "password" name = "password" placeholder="Enter your password" value = {password} onChange = {handleChange} />
                        <span className= {styles.errorMessage}>{passwordError}</span>
                    </div>
                    <button className= {styles.btn}>Sign in</button>
                    <Link to = "/signup"><span className={styles.createAccLabel}>Create new account</span></Link>
                </form>
                <button className= {styles.btn} onClick={test}>check</button>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Login;