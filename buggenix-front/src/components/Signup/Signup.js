import { useState } from "react";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

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
        <>
            <form onSubmit={handleSubmit}>
                <input name = "email" placeholder="Enter your email" value = {email} onChange = {handleChange}/>
                <span>{emailError}</span>
                <input name = "name" placeholder="Full name" value = {name} onChange = {handleChange} />
                <span>{nameError}</span>
                <input name = "password" placeholder="Enter your password" value = {password} onChange = {handleChange} />
                <span>{passwordError}</span>
                <button type = "submit">Signup</button>
            </form>
        </>
    )
}

export default Signup;