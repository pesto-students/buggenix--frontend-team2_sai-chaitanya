import React, { useState } from 'react';
import { Avatar, Button, Tabs, Input } from 'antd';
import styles from "./TicketResponseInput.module.css";

const MessageBox = ({type}) =>  {
    const {TextArea} = Input;
    return (
        <>
            <div style = {{
                display: "flex", 
                flexDirection: "row", 
                margin: "10px 0"
            }}>
                <Avatar style = {{
                    marginRight: "8px"
                }}>HB</Avatar>
                {type == "note" ? (
                    <TextArea placeholder ='Add a note'>Add a note</TextArea>
                    ): <TextArea placeholder = "Type your reply here">Reply to this ticket</TextArea>}

            </div>
            <div style = {{
                display: "flex",
                justifyContent: "flex-end", 
                margin: "10px 0"
            }}>
                <Button style = {{
                    backgroundColor: "#6585E6", 
                    color: "white", 
                    border: "none"
                }}>{type == "note" ? "Add note" : "Reply"}</Button>
            </div>
        </>
    )
}

const TicketResponseInput = () => {

    const [selectedTab, setSelectedTab] = useState(""); 
    
    const onChange = (key) => {
        setSelectedTab(key);
        console.log(key);
    };

    const items = [
        {
            label: `Add note`,
            key: 'note',
            children: <MessageBox type = "note" />,
        },
        {
            label: `Reply`,
            key: 'reply',
            children: <MessageBox type = "reply"/>,
        }
    ]

    return (
        <div className = {styles.ticketReponseTabsContainer}>
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={items}
                size = {"small"}
                style = {{
                    minHeight: "10rem", 
                }}
            />
        </div>
    );
}

export default TicketResponseInput;

