import { BugOutlined, CommentOutlined, TwitterOutlined } from "@ant-design/icons";
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
    
    const {id, conversationCount = "3", creatorInfo, description = "", timestamp} = ticketItem || {};
    const {name: creatorName = "Harish Balasubramanian", channel} = creatorInfo || {};

    return (
        <div onClick={handleClick} className = {styles.cardContainer}>
            <Card style={{height: '100%', width: '100%'}}  className= {styles.card + " " + (selectedTicket?.id == id && styles.selected)} >  
                <div style={{height: '100%', width: '100%'}} className= {styles.cardContainer}>
                    <div className = {styles.checkbox}>
                        <Checkbox checked={isChecked} style = {{
                            padding: "0 0"
                        }} onChange={handleCheckboxChange}/>
                    </div>
                    <div>
                        <Avatar style = {{
                            backgroundColor: "#5F40EC", 
                            color: "black",
                        }} icon = {!channel ? <BugOutlined size={"small"} style = {{color: "white"}}/> : <TwitterOutlined style = {{color: "white"}}/>}/>
                    </div>
                    <div className= {styles.itemTextContent}>
                        <div className = {styles.topTextContent}>
                            <div name = "id"> {"#"+ id.slice(0, 6)} </div>   
                            <div className = {styles.creatorName} name = "creatorName"> {creatorName} </div>
                        </div>
                        <div>
                            <div className = {styles.subject} name = "title">{ description.split("").splice(0, 60).join("")}</div>
                        </div>
                        <div className= {styles.itemBottom}>
                            <div className = {styles.stats}>
                                <CommentOutlined /> 
                                <span>{conversationCount}</span>
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


