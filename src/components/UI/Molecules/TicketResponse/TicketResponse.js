import { Avatar, message, Popconfirm  } from 'antd';
import styles from './TicketResponse.module.css';


const TicketResponse = ({replier, ticketCreator, action, content, type}) => { //type could be reply or note

    const handleAction = (e) => {
        const {name} = e.target;
        if(name == "edit") {
            
        }
        //call parent method and send the name: type
    }
    const confirm = (e) => {
        console.log(e);
        message.success('Comment deleted');
    };

      const cancel = (e) => {
    };

    return (
        <div className = {styles.container}>
            <div className = {styles.topInfo}>
                <Avatar className = {styles.avatar}>{replier && replier[0]}</Avatar>
                <span>{replier}</span>
                <span style = {{
                        fontSize: "smaller", 
                        color: "#8E8E8E"
                    }}>{type == "note" ? "Internal note" : (
                        <span>Reply sent to 
                            <span style={{
                                    fontWeight: "500", 
                                    marginLeft: "5px"
                                    }}> 
                                {ticketCreator}
                            </span>
                        </span>
                    )} 
                </span>
            </div>
            <div style = {{
                    margin: "1rem 0", 
                    fontSize: "smaller", 
                    fontWeight: "400"
                }}>
                <span>{content}</span>
            </div>
            {type == "note" ? (
                 <div className = {styles.actionBtns}>
                 <button name = "edit" style = {{
                    fontSize: "small", 
                 }} onClick={handleAction}>Edit</button>
                 <Popconfirm
                       title = "Are you sure you want to delete this comment?"
                       onConfirm={confirm}
                       onCancel= {cancel}
                 ><button style = {{
                    fontSize: "small", 
                 }} name = "delete" onClick={handleAction}>Delete</button></Popconfirm>
             </div>
            ) : null}
           
        </div>
    )
}

export default TicketResponse;

TicketResponse.defaultProps = {
    content: "Thanks a lot for your feedback. We’re currently working on improving integrations with our product. So - stay updated", 
    replier: "Harish B", 
    ticketCreator: "Alex Turner", 
    type: "note"
}