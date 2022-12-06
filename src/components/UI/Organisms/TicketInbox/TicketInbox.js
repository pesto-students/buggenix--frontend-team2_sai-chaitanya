import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message, Spin, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/authContext";
import ConfigureField from "../../Molecules/ConfigureField/ConfigureField";
import TicketDetails from "../../Molecules/TicketDetails/TicketDetails";
import ThreadComment from "../ThreadComment";
import styles from "./TicketInbox.module.css";

const TicketInbox = ({usersList, deleteTicket, projectsList, configurationData = [], selectedTicket, onUpdate, onDelete, isLoading, ticketList, updateTicket, addConversation}) => {

    const [open, setOpen] = useState(false);
    const [reply, setReply] = useState("");
    const [replyError, setReplyError] = useState("");
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [configData, setConfigData] = useState(configurationData);
    const {user} = useAuth();
    const [messageApi, contextHolder] = message.useMessage();


    useEffect(() => {
        const isPresent = configData.findIndex(config => config.name === "projectId");
        
        if(isPresent === -1) {
            const projectObj = {
                category: "Move to a project", 
                name: "projectId", 
                options: projectsList.map(project => {
                    const {id, name} = project;
                    return {
                        value: id, 
                        label: name
                    }
                })
            }

            const newConfigData = [...configData, projectObj];
            setConfigData(newConfigData);

        } else {
            let newConfigData = [...configData]

            newConfigData  = newConfigData.map(config => {
                if(config.name === "projectId") {
                    return {
                        ...config, 
                        options: projectsList.map(project => {
                            const {id, name} = project;
                            return {
                                value: id, 
                                label: name
                            }
                        })
                    }
                } else {
                    return config;
                }
            })

            setConfigData(newConfigData);
        }
    }, [projectsList]);

    useEffect(() => {
        const isPresent = configData.findIndex(config => config.name === "assigneeId");
        if(isPresent === -1) {
            const assigneeObj = {
                category: "Choose assignee", 
                name: "assigneeId", 
                options: usersList.map(user => {
                    const {id, name} = user;
                    return {
                        value: id, 
                        label: name
                    }
                })
            }

            const newConfigData = [...configData, assigneeObj];
            setConfigData(newConfigData);

        } else {
            let newConfigData = [...configData]

            newConfigData  = newConfigData.map(config => {
                if(config.name === "assigneeId") {
                    return {
                        ...config, 
                        options: usersList.map(user => {
                            const {id, name} = user;
                            return {
                                value: id, 
                                label: name
                            }
                        })
                    }
                } else {
                    return config;
                }
            })

            setConfigData(newConfigData);
        }
    }, [usersList]);


    
    const ticketDeleteSuccess = () => {
        messageApi.open({
            type: 'success',
            content: 'Ticket deleted',
        });
    };
    
    const ticketDeleteFailure = () => {
        messageApi.open({
            type: 'error',
            content: 'Ticket deletion failed',
        });
    };
    
    if(isLoading || !selectedTicket) {
        return (
            <div>
                <Spin/>
            </div>
        )
    } 
    
    if(ticketList.length == 0) {
        return (
            <div>
                No ticket selected
            </div>
        )
    } 

    const { description, creatorInfo, timestamp, conversations = [], id: ticketId, type: ticketType } = selectedTicket || {};
    const { name, id, type, channel  } = creatorInfo || {};
 
    const showPopconfirm = () => {
        setOpen(true);
      };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

    const handleDelete = () => {
        setConfirmLoading(true);
        deleteTicket(ticketId).then(res => {
            setConfirmLoading(false);
            ticketDeleteSuccess();
            setOpen(false);
        }).catch(err => {
            setConfirmLoading(false);
            ticketDeleteFailure();
            setOpen(false);
        })
    }

    const handleAttributeChange = (category, value) => {
        
        const options = {
            ticketId: ticketId, 
            [category]: value 
        }
        updateTicket(options);
    }


    const handleSubmitReply = () => {
        if(!reply) {
            setReplyError("Response shouldn't be empty");
        } else {
            setReplyError("");
            addConversation({ 
                ticketId,
                description: reply //
            });
            setReply("")
        }
    
    }

    const handleReply = (e) => {
        const {value} = e.target;
        setReply(value);
    }


    return (
        <div className = {styles.ticket_inbox}>
            {contextHolder} 
            <div className = {styles.ticket_inbox_conversations}>
                <div className = {styles.ticket_viewer_thread}>
                    <div className = {styles.thread_main}>
                        <div className = {styles.title}>
                            <span>Ticket info</span>
                        </div>
                       <ThreadComment creatorName={name} createdTime = {timestamp}  main = {true} content = {description}/>
                        <form className = {styles.responseBox}>
                            <textarea className = {styles.textArea} value = {reply} onChange = {handleReply} placeholder="Type your reply"/>
                            <Button onClick={handleSubmitReply} className = {styles.button}>Submit</Button>
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
                    {configData.map(info => {
                        const {category, options, id, name} = info || {};
                        return (<ConfigureField name = {name} selectedTicket = {selectedTicket} onChange = {handleAttributeChange} key = {category} category={category} options = {options}/>)
                    })}
                </div>
                <div className = {styles.heading}>
                    <span className = {styles.item}>Ticket details</span>
                </div>
                <div className = {styles.details}>
                    <TicketDetails name = "Creator Name" value = {name}/>
                    <TicketDetails name = "Channel" value = {channel || "Buggenix"} />
                    <TicketDetails name = "Created Time" value = {timestamp}/>
                </div>
                <div className = {styles.deleteTicketBtn}>
                <Popconfirm
                    title="Delete ticket?"
                    open={open}
                    onConfirm={handleDelete}
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
            name: "type", 
            options: [
                {
                    value: "feedback" , 
                    label: "General Feedback"
                }, 
                {
                    value: "bug_report", 
                    label: "Bug Report"
                }, 
                {
                    value: "feature",
                    label: "Feature request"
                },             
            ], 
        }, 
        {
            category: "Priority", 
            name: "priority",
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
        // {
        //     category: "Move to project", 
        //     name: "projectId",
        //     options: [
               
        //         {
        //             value: "atonis" , 
        //             label: "Atonis"
        //         }, 
        //         {
        //             value: "Medeasy", 
        //             label: "MedEasy"
        //         }, 
        //         {
        //             value: "Buggenix",
        //             label: "Buggenix"
        //         }, 
        //     ], 
        // },
        {
            category: "Status", 
            name: "status",
            options: [
                {
                    value: "open" , 
                    label: "Open"
                }, 
                {
                    value: "progress", 
                    label: "In Progress"
                }, 
                {
                    value: "review",
                    label: "Under Review"
                }, 
                {
                    value: "done",
                    label: "Done"
                }, 
            ], 
        }, 

    ]
}