import { CommentOutlined, TwitterOutlined } from "@ant-design/icons";
import { Avatar, Card, Checkbox } from "antd";
import React, { useState } from "react";
import styles from "./TicketItem.module.css";

const TicketItem = ({ticketItem, onCheck, onSelect, selectedTicket, isChecked}) => {
    
    
    const handleCheckboxChange = (e) => {
        const {id} = ticketItem || {};
        onCheck(id, e.target.checked);
    }

    const handleClick = (e) => {
        if(e.target.type !== "checkbox") {
            onSelect(ticketItem);
        }
    }
    
    const {id, commentCount, creatorInfo, description = "", timestamp} = ticketItem || {};
    const {name: creatorName = "Harish Balasubramanian", socials = "Twitter"} = creatorInfo || {};

    return (
        <div onClick={handleClick} className = {styles.cardContainer}>
            <Card className= {styles.card + " " + (selectedTicket?.id == id && styles.selected)} > 
                <div className= {styles.cardContainer}>
                    <div className = {styles.checkbox}>
                        <Checkbox checked={isChecked} style = {{
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
                            <div className = {styles.subject} name = "title">{ description.split("").splice(0, 60).join("")}</div>
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

export default React.memo(TicketItem);


