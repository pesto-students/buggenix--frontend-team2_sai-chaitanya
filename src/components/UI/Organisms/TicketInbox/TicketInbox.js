import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import ConfigureField from "../../Molecules/ConfigureField/ConfigureField";
import TicketDetails from "../../Molecules/TicketDetails/TicketDetails";
import ThreadComment from "../ThreadComment";
import styles from "./TicketInbox.module.css";

const TicketInbox = ({configurationData, selectedTicket, onUpdate, onDelete}) => {

    const { description, creatorInfo, timestamp, conversations = [], id: ticketId } = selectedTicket || {};
    const { name, id, type, channel  } = creatorInfo || {};
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [reply, setReply] = useState("");


    const showPopconfirm = () => {
        setOpen(true);
      };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

    const handleOk = () => {
        //delete ticket
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    }

    const handleAttributeChange = (category, value) => {
        console.log(category, "category")
        console.log(value, "value");
        onUpdate(category, value, ticketId)
    }

    const handleSubmitReply = () => {
        handleAttributeChange("reply", reply);
    
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setReply(value);
    }



    return (
        <div className = {styles.ticket_inbox}>
            <div className = {styles.ticket_inbox_conversations}>
                <div className = {styles.ticket_viewer_thread}>
                    <div className = {styles.thread_main}>
                        <div className = {styles.title}>
                            <span>Ticket info</span>
                        </div>
                       <ThreadComment creatorName={name} createdTime = {timestamp}  main = {true} content = {description}/>
                        <form onSubmit={handleSubmitReply} className = {styles.responseBox}>
                            <textarea className = {styles.textArea} value = {reply} onChange = {handleChange} placeholder="Type your reply"/>
                            <Button className = {styles.button}>Submit</Button>
                        </form>
                        <div className = {styles.title}>
                            <span>Conversations</span>
                        </div>
                        {conversations.map(conversation => {
                            const {description, timestamp, creatorInfo, id } = conversation || {};
                            const {name, id: creatorId} = creatorInfo || {};
                            return (<ThreadComment key = {id} content={description} createdTime = {timestamp} creatorName = {name} />)

                        })}
                    </div>
                </div>
            </div>
            <div className = {styles.ticketActions}>
                <div className = {styles.heading}>
                    <span className = {styles.item}>Set ticket attributes here</span>
                </div>
                <div className = {styles.configurations}>
                    {configurationData.map(info => {
                        const {category, options, id} = info || {};
                        return (<ConfigureField  onChange = {handleAttributeChange} key = {category} category={category} options = {options}/>)
                    })}
                </div>
                <div className = {styles.heading}>
                    <span className = {styles.item}>Ticket details</span>
                </div>
                <div className = {styles.details}>
                    <TicketDetails name = "Creator Name" value = "Aditya Vinayak"/>
                    <TicketDetails name = "Social channel" value = "Twitter" />
                    <TicketDetails name = "Created Time" value = "Dec, 01, 2022"/>
                </div>
                <div className = {styles.deleteTicketBtn}>
                <Popconfirm
                    title="Delete ticket?"
                    open={open}
                    onConfirm={handleOk}
                    okButtonProps={{
                        loading: confirmLoading,
                    }}
                    onCancel={handleCancel}
                    >
                        <Button onClick={showPopconfirm} className= {styles.deleteBtn}>Delete Ticket <DeleteOutlined/></Button>
                    </Popconfirm>
                </div>

            </div>
        </div>  
    )
}

export default TicketInbox;

TicketInbox.defaultProps = {
    configurationData: [
        {
            category: "Type", 
            options: [
                {
                    value: "general_feedback" , 
                    label: "General Feedback"
                }, 
                {
                    value: "bug_report", 
                    label: "Bug Report"
                }, 
                {
                    value: "feature_request",
                    label: "Featuer request"
                }
            ], 
        }, 
        {
            category: "Priority", 
            options: [
                {
                    value: "urgent" , 
                    label: "Urgent"
                }, 
                {
                    value: "high", 
                    label: "High"
                }, 
                {
                    value: "neutral",
                    label: "Neutral"
                }, 
                {
                    value: "low",
                    label: "Low"
                }, 
            ], 
        }, 
        {
            category: "Move to project", 
            options: [
                {
                    value: "atonis" , 
                    label: "Atonis"
                }, 
                {
                    value: "Medeasy", 
                    label: "MedEasy"
                }, 
                {
                    value: "Buggenix",
                    label: "Buggenix"
                }
            ], 
        }, 
        {
            category: "Choose assignee", 
            options: [
                {
                    value: "1" , 
                    label: "Harish Balasubramanian"
                }, 
                {
                    value: "2", 
                    label: "Aditya Vinayak"
                }, 
                {
                    value: "3",
                    label: "Harshavardhan"
                }
            ], 
        }, 
        {
            category: "Status", 
            options: [
                {
                    value: "1" , 
                    label: "Open"
                }, 
                {
                    value: "2", 
                    label: "In Progress"
                }, 
                {
                    value: "3",
                    label: "Under Review"
                }, 
                {
                    value: "4",
                    label: "Done"
                }, 
            ], 
        }, 

    ]
}