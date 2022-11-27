import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ConfigureField from "../../Molecules/ConfigureField/ConfigureField";
import TicketDetails from "../../Molecules/TicketDetails/TicketDetails";
import ThreadComment from "../ThreadComment";
import styles from "./TicketInbox.module.css";

const TicketInbox = ({configurationData, selectedTicket}) => {

    const { description, creatorInfo, timestamp, conversations = [] } = selectedTicket || {};
    const { name, id, type, channel  } = creatorInfo || {};
    return (
        <div className = {styles.ticket_inbox}>
            <div className = {styles.ticket_inbox_conversations}>
                <div className = {styles.ticket_viewer_thread}>
                    <div className = {styles.thread_main}>
                        <div className = {styles.title}>
                            <span>Ticket info</span>
                        </div>
                       <ThreadComment creatorName={name} createdTime = {timestamp}  main = {true} content = {description}/>
                        <div className = {styles.responseBox}>
                            <textarea className = {styles.textArea} placeholder="Type your reply"/>
                            <Button className = {styles.button}>Submit</Button>
                        </div>
                        <div className = {styles.title}>
                            <span>Conversations</span>
                        </div>
                        {conversations.map(conversation => {
                            const {content, createdTime, creatorInfo} = conversation || {};
                            const {name, id} = creatorInfo || {};
                            return (<ThreadComment content={content} createdTime = {createdTime} creatorName = {name} />)

                        })}
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
                        return (<ConfigureField key = {category} category={category} options = {options}/>)
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