import styles from './TeamInvite.module.css';
import Logo from "../UI/Molecules/Logo"
import { Button, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';


const TeamInvite = ({invitor = "harish"}) => {

    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [email, setEmail] = useState("");
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    useEffect(() => {
        const href = window.location.href;
        console.log(href, "href");
        const result = href.split("?")[1];
        const email = result.split("=")[1];
        setEmail(email);
    }, [])


    const warning = () => { 
        messageApi.open({
          type: 'warning',
          content: 'Please enter valid username and password',
        });
      };

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "fullname") {
            setFullName(value);
        } else {
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        if(!fullName || !password) {
            warning();
        } else {
            // register member in the database by making an API call

            const payload = {
                email, 
                username: fullName, 
                password, 
                member: 1
            }

            axiosPrivate.post("auth/register", payload).then(res => {
                navigate("/dashboard/metrics");
            }).catch(err => {
                //twitter is mandatory if success 200. If handle is not there? 403                
                console.log("Member invite failed");
                
            })
        }
    }

    return (
        <div style = {{
            backgroundColor: "#DFE3FF", 
            height: "50rem"
        }}>
            {contextHolder}
            <form className= {styles.container}>
                <Logo />
                <h3 style = {{margin: "1rem 0"}}>You've been invited to join {invitor}'s team</h3>
                <Input className= {styles.input} value = {email} disabled />
                <Input className= {styles.input} placeholder = {"Full name"} name = "fullname" value = {fullName} onChange = {handleChange}/>
                <Input className= {styles.input} placeholder= {"Password (min. 8 char)"} name = "password" value = {password} onChange = {handleChange} />
                <h3 style = {{margin: "1rem 0", fontSize: "small", lineHeight: "1rem"}}>By signing up, you're agreeing to our <Link style = {{textDecoration:"underline", fontStyle: "italic" }}>Terms of service</Link> and to our <Link style = {{textDecoration:"underline", fontStyle: "italic" }}>Privacy policy</Link></h3>
                <Button onClick ={handleSubmit} className= {styles.btn}>Join the team</Button>
            </form>
        </div>
    )
}

export default TeamInvite;