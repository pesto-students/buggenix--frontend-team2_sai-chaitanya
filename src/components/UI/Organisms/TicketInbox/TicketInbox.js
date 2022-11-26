import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ConfigureField from "../../Molecules/ConfigureField/ConfigureField";
import TicketDetails from "../../Molecules/TicketDetails/TicketDetails";
import ThreadComment from "../ThreadComment";
import styles from "./TicketInbox.module.css";

const TicketInbox = ({configurationData}) => {
    return (
        <div className = {styles.ticket_inbox}>
            <div className = {styles.ticket_inbox_conversations}>
                <div className = {styles.ticket_viewer_thread}>
                    <div className = {styles.thread_main}>
                        <div className = {styles.title}>
                            <span>Ticket subject</span>
                        </div>
                       <ThreadComment main = {true} content = {"We would love to see new and improved features, and it'll be great if there were more integration available"}
/>
                        <div className = {styles.responseBox}>
                            <textarea className = {styles.textArea} placeholder="Type your reply"/>
                            <Button className = {styles.button}>Submit</Button>
                        </div>
                        <div className = {styles.title}>
                            <span>Conversations</span>
                        </div>
                        <ThreadComment />
                        <ThreadComment />
                        <ThreadComment />
                        <ThreadComment />
                        <ThreadComment />
                    </div>
                </div>
            </div>
            <div className = {styles.ticketActions}>
                <div className = {styles.heading}>
                    <span className = {styles.item}>Ticket attributes</span>
                </div>
                <div className = {styles.configurations}>
                    {configurationData.map(info => {
                        const {category, options} = info || {};
                        return (<ConfigureField category={category} options = {options}/>)
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
                    <Button className= {styles.deleteBtn}>Delete Ticket <DeleteOutlined/></Button>
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