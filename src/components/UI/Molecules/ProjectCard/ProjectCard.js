import { BuildFilled, TagFilled, TagOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider, Tooltip } from "antd"
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { randomColorGenerator } from "../../../../utils/randomColorGenerator";
import styles from "./ProjectCard.module.css";



const ProjectCard = ({projectInfo, updateProject}) => {

    const {name: projectName, description, ticketCount, openTicketCount, creator, createdTime, members, id} = projectInfo || {};
    const navigate = useNavigate();
    const completedPercent = ticketCount == 0 ? 100 : ((ticketCount - openTicketCount)/ticketCount) * 100;

    const handleClick = () => { 
        updateProject(id);
        navigate("/dashboard/tickets");
    }

    return (
        <Card style = {{
            width: 240
        }} bodyStyle={{padding: "1rem"}} onClick = {handleClick} className = {styles.cardContainer}>
            <div className = {styles.cardTop}>
                <div className = {styles.title}>{projectName}</div> 
                <div className = {styles.description}> 
                    <div className = {styles.descIcon}>
                        <BuildFilled />  
                    </div>
                    <div className = {styles.descText}>{description.length > 44 ? (description.slice(0, 44) + "...") : description}</div>
                </div>
                <div className = {styles.description}>
                    <div className = {styles.descIcon}>
                        <TagOutlined/>
                    </div>
                    <div className = {styles.descText}>
                        {openTicketCount} open tickets
                    </div>
                </div>
                <div className = {styles.hrDiv}>
                    <hr className = {styles.hr}/>
                </div>
            </div>
            <div className = {styles.cardBottom}>
                <div className = {styles.memberAvatars}>
                    <Avatar.Group maxCount={"2"}>
                        {members.map(member => {
                            const {name, id} = member || {};
                            return (
                                <Tooltip title = {name} placement = "top">
                                    <Avatar 
                                        style = {{
                                            backgroundColor: "#" + randomColorGenerator()
                                        }}
                                    >{name[0]}</Avatar>
                                </Tooltip>
                            )
                        })}
                    </Avatar.Group>
                </div>
                <div className = {styles.progressRate}>
                    <div>Progress</div>
                    <div>{completedPercent + "%"}</div>
                </div>
            </div>
        </Card>
    )
}

export default ProjectCard;

ProjectCard.defaultProps = {
    members: [
        {
            name: "Harish", 
            id: "446"
        }, 
        {
            name: "Aditya", 
            id: "446"
        }, 
        {
            name: "Tarun", 
            id: "446"
        }, 
        {
            name: "Rahul", 
            id: "446"
        }, 
    ]
}
