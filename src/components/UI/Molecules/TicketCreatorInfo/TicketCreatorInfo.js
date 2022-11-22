import { Avatar } from "antd"
import styles from "./TicketCreatorInfo.module.css";

const TicketCreatorInfo = ({name = "Harish Balasubramanian", channel = "Facebook"}) => {
    return (
        <div className = {styles.container}>
            <Avatar> {name && name[0]} </Avatar>
            <div className = {styles.content}>
                <span>{name}</span>
                <div style = {{
                    fontSize: "smaller"
                }}>Sent via <span style = {{
                    color: "#5F90F0"
                }}>{channel}</span></div>
            </div>
        </div>
    )
}

export default TicketCreatorInfo;

