import { Checkbox } from "antd";
import TicketInbox from "../../components/UI/Organisms/TicketInbox";
import TicketList from "../../components/UI/Organisms/TicketList";
import styles from "./TicketPreviewContainer.module.css";

const TicketPreviewContainer = () => {
    return (
        <div className = {styles.ticketPreviewContainer}>
            <div className = {styles.ticketBox}>
                <Checkbox />
                <span>Select All</span>
            </div>
            <div className = {styles.ticketList}>
                <TicketList/>
            </div>
            <div className = {styles.conversations}>
                <TicketInbox/>
            </div>
        </div>
    )
}

export default TicketPreviewContainer;