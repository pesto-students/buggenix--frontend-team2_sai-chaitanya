import { Button, Input, message } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Logo from "../UI/Molecules/Logo";
import Footer from "../Footer/Footer";
import styles from "./InputSocials.module.css";


const InputSocials = () => {

    const [facebookUsername, setFacebookusername] = useState("");
    const [twitterHandle, setTwitterHandle] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!facebookUsername && !twitterHandle) {
            warning();
        } else {
            const socials = {
                facebook: facebookUsername, 
                twitter: twitterHandle
            }

            axiosPrivate.post("auth/socials", socials).then(res => {
                console.log(res);
                navigate("/dashboard/metrics");
            }).catch(err => {
                //twitter is mandatory if success 200. If handle is not there? 403
                console.log("Socials failed");
            })

        }
    }

    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: 'This is a warning message',
        });
      };

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "facebook") {
            setFacebookusername(value);
        } else {
            setTwitterHandle(value);
        }
    }

    return (
        <>
            {contextHolder}
            <div style = {{
                backgroundColor: "#F7F7F9", 
                minHeight: "40rem",  
            }}>
                <form className= {styles.container}>
                    <Logo />
                    <h3 style = {{margin: "1rem 0"}}>Give us your brand email and social media handles you want us to scrape for you :D </h3>
                    <Input onChange={handleChange} placeholder = "Enter facebook username" name = "facebook" className= {styles.input} value = {facebookUsername}  />
                    <Input onChange={handleChange} placeholder = "Enter twitter handle" name = "twitter" className= {styles.input} value = {twitterHandle}  />
                    <Button onClick ={handleSubmit} className= {styles.btn}>Proceed</Button>
                </form>
            </div>
            <Footer/> 
        </>
    )
}

export default InputSocials;