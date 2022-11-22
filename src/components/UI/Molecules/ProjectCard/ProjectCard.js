import { Avatar, Card } from "antd"
import { useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({projectInfo}) => {

    const [isHovered, setIsHovered] = useState(true);

    const {name: projectName, description, ticketCount, openTicketCount, creator, createdTime} = projectInfo || {};
    const {name: creatorName, role, id: userId} = creator || {};

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }

    return (
        <Card className = {styles.cardContainer} onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut}>
            <div style = {{
                textAlign: "left", 
                padding: " 6px 1rem", 
                fontSize: "small", 
                fontWeight: "500"
            }}>{projectName}</div>
            {isHovered ? (
                <div className = {styles.cardTop}>
                    <span className = {styles.circle}></span> 
                    <span> {ticketCount} item, </span>
                    <span> {openTicketCount} open </span>
                </div>
            ) : (
                <div className = {styles.cardBottom}>
                    <Avatar size={"small"}>{creatorName[0]}</Avatar>
                    <span>{creatorName}</span>
                    <span>{createdTime}</span>
                </div>
            )}
        </Card>
    )
}

export default ProjectCard;
