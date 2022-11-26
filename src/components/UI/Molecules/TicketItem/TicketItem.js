import { CommentOutlined, TwitterOutlined } from "@ant-design/icons";
import { Avatar, Card, Checkbox } from "antd";
import { useState } from "react";
import styles from "./TicketItem.module.css";

const TicketItem = ({ticketInfo, onTicketCheck, onTicketSelect, selectedTicketId}) => {

    const [isHoveredOver, setIsHoveredOver] = useState(false);
    
    
    const handleCheckboxChange = (e) => {
        onTicketCheck(id, e.target.checked);
    }
    
    const handleMouseOver = () => {
        setIsHoveredOver(true);
    }
    
    const handleMouseOut = () => {
        setIsHoveredOver(false);
    }

    const handleSelect = (e) => {
        if(e.target.type !== "checkbox") {
            // onTicketSelect(ticketInfo);
        }
    }

        
    const {id = "6785683", commentCount = "3", creatorInfo, title = "We would love to see new and improved features", subject = "Hellow there", timestamp = "21 Jan, 2022"} = ticketInfo || {};
    const {name: creatorName = "Harish Balasubramanian", socials = "Twitter"} = creatorInfo || {};

    return (
        <div onClick={handleSelect} className = {styles.cardContainer}>
            <Card className= {styles.card + " " + (isHoveredOver && styles.active) + " " + (selectedTicketId == id && styles.selected)} > 
                <div className= {styles.cardContainer}>
                    <div className = {styles.checkbox}>
                        <Checkbox style = {{
                            padding: "0 0"
                        }} onChange={handleCheckboxChange}/>
                    </div>
                    <div>
                        <Avatar style = {{
                            backgroundColor: "#5F40EC", 
                            color: "black",
                        }} icon = {<TwitterOutlined style = {{color: "white"}}/>}/>
                    </div>
                    <div className= {styles.itemTextContent}>
                        <div className = {styles.topTextContent}>
                            <div name = "id"> {"#"+ id} </div>   
                            <div className = {styles.creatorName} name = "creatorName"> {creatorName} </div>
                        </div>
                        <div>
                            <div className = {styles.subject} name = "title">{ (title || subject).split("").splice(0, 60).join("")}</div>
                        </div>
                        <div className= {styles.itemBottom}>
                            <div className = {styles.stats}>
                                <CommentOutlined /> 
                                <span>{commentCount}</span>
                            </div>
                            <div className = {styles.createdTime}>
                                <span>{timestamp}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default TicketItem;


