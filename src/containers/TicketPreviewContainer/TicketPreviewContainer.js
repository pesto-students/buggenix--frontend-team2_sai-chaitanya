import { Checkbox } from "antd";
import TicketInbox from "../../components/UI/Organisms/TicketInbox";
import TicketList from "../../components/UI/Organisms/TicketList";
import styles from "./TicketPreviewContainer.module.css";

const TicketPreviewContainer = ({ticketList, isLoading, isError, checkedTicketIds, onCheck, selectedTicket, onSelect, onCheckAll}) => {

    const handleCheckAll = (e) => {
        onCheckAll(e.target.checked);
    }
    
    return (
        <div className = {styles.ticketPreviewContainer}>
            <div className = {styles.ticketBox}>
                <Checkbox onChange={handleCheckAll}/>
                <span>Select All</span>
            </div>
            <div className = {styles.ticketList}>
                <TicketList onSelect = {onSelect} selectedTicket = {selectedTicket} onCheck = {onCheck} checkedTicketIds = {checkedTicketIds} ticketList = {ticketList}/>
            </div>
            <div className = {styles.conversations}>
                <TicketInbox selectedTicket = {selectedTicket}/>
            </div>
        </div>
    )
}

export default TicketPreviewContainer;