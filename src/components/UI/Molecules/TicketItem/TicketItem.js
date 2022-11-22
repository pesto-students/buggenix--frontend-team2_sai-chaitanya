import { TwitterOutlined } from "@ant-design/icons";
import { Card, Checkbox, Avatar } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./TicketItem.module.css";


const TicketItem = ({ticketInfo, onTicketCheck, onTicketSelect, selectedTicketId}) => { //index.js

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
            onTicketSelect(ticketInfo);
        }
    }
    
    const {id, creatorInfo, title, subject, timestamp} = ticketInfo || {};
    const {name: creatorName} = creatorInfo || {};

    return (
        <div onClick={handleSelect} onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut} className = {styles.cardContainer}>
            <Card className= {styles.card + " " + (isHoveredOver && styles.active) + " " + (selectedTicketId == id && styles.selected)} > 
                <div className= {styles.cardContent}>
                    <div>
                        <Checkbox style = {{
                            padding: "0 0"
                        }} onChange={handleCheckboxChange}/>
                    </div>
                    <div>
                        <Avatar style = {{
                            backgroundColor: "white", 
                            color: "black"
                        }} icon = {<TwitterOutlined />}/>
                    </div>
                    <div className= {styles.itemTextContent}>
                        <div className = {styles.topTextContent}>
                            <div name = "id"> {"#"+ id} </div>   
                            <div name = "creatorName"> {creatorName} </div>
                            <span name = "createdTime"> {timestamp}</span>
                        </div>
                        <div>
                            <div style = {{
                                fontSize: "smaller", 
                            }} name = "title">{ (title || subject).split("").splice(0, 30).join("")}</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default TicketItem;
