import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComponent } from "../LandingPage/LandingPage";
import Logo from "../Logo/Logo";
import styles from "./Signup.module.css";
import axios from "axios";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const baseUrl = "http://localhost:8800/api"

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === "email") {
            setEmail(value);
        } else if(name === "name") {
            setName(value);
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
            
        } else if(type === "name") {
            if(!name) {
                setName("Please enter name");
                return false;
            }
            return true;
        }  else { // case for password
            
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
        if(validate(email, "email") && validate(password, "password") && validate(name, "name")) {
            console.log("Signup successful");
            axios
            .post(`${baseUrl}/auth/register` , {
              "email":email,
              "name":name,
              "password": password
            })
            .then((response) => {
              console.log("response",response);
            });
            setEmail("");
            setName("");
            setPassword("");
            setEmailError("");
            setNameError("");
            setPasswordError("");
            
        } else {
            console.log("Signup failure")
        }
    }

    return (
        <div className= {styles.container}>
            <HeaderComponent />
            <div className= {styles.formContainer}>
                <form className= {styles.form} onSubmit={handleSubmit}>
                    <span>Create your free account and start collecting user feedback</span>    
                    <span>No credit card needed, 15-days free.</span>    
                    <div>
                        <input id = "email" name = "email" placeholder="Work email" value = {email} onChange = {handleChange}/>
                        <span>{emailError}</span>
                    </div>
                    <div>
                        <input id = "name" name = "name" placeholder="Full name" value = {name} onChange = {handleChange}/>
                        <span>{nameError}</span>
                    </div>
                    <div>
                        <input id = "password" name = "password" placeholder="Password" value = {password} onChange = {handleChange} />
                        <span>{passwordError}</span>
                    </div>
                    <button type='submit' className= {styles.btn}>Sign in</button>
                    <Link to = "/signup"><span className={styles.createAccLabel}>Create new account</span></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;