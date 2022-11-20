import { Button, Input, message } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Logo from "../../UI/Molecules/Logo/Logo";
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

            axiosPrivate.post("http://localhost:8800/api/auth/handleSocialMediaInput", socials).then(res => {
                // const {statusCode} = res;
                console.log(res);
            })
            //api

            console.log(socials ,"submitted");

            navigate("/dashboard/metrics");
            

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

// return (
//     <div style = {{
//         backgroundColor: "#DFE3FF", 
//         height: "50rem"
//     }}>
//         {contextHolder}
//         <form className= {styles.container}>
//             <Logo />
//             <h3 style = {{margin: "1rem 0"}}>You've been invited to join {invitor}'s team</h3>
//             <Input className= {styles.input} value = {inviteeEmail} disabled />
//             <Input className= {styles.input} placeholder = {"Full name"} name = "fullname" value = {fullName} onChange = {handleChange}/>
//             <Input className= {styles.input} placeholder= {"Password (min. 8 char)"} name = "password" value = {password} onChange = {handleChange} />
//             <h3 style = {{margin: "1rem 0", fontSize: "small", lineHeight: "1rem"}}>By signing up, you're agreeing to our <Link style = {{textDecoration:"underline", fontStyle: "italic" }}>Terms of service</Link> and to our <Link style = {{textDecoration:"underline", fontStyle: "italic" }}>Privacy policy</Link></h3>
//             <Button onClick ={handleSubmit} className= {styles.btn}>Join the team</Button>
//         </form>
//     </div>
// )