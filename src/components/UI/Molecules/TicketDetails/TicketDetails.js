import styles from "./TicketDetails.module.css";

const TicketDetails = ({name = "Creator name", value = "Aditya"}) => {
    
    return (
        <div className = {styles.container}>
            <span className = {styles.title}>{name}:</span> 
            <span> {value} </span>
        </div>
    )
}

export default TicketDetails;
