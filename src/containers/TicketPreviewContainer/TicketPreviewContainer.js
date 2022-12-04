import { Checkbox } from "antd";
import TicketInbox from "../../components/UI/Organisms/TicketInbox";
import TicketList from "../../components/UI/Organisms/TicketList";
import styles from "./TicketPreviewContainer.module.css";

const TicketPreviewContainer = (props) => {

    const handleCheckAll = (e) => {
        onCheckAll(e.target.checked);
    }

    const {updateTicket, projectsList, usersList, ticketList, onDelete, isLoading, isError, checkedTicketIds, onCheck, selectedTicket, onSelect, onCheckAll, addConversation} = props;
    
    return (
        <div className = {styles.ticketPreviewContainer}>
            <div className = {styles.ticketBox}>
                <Checkbox onChange={handleCheckAll}/>
                <span>Select All</span>
            </div>
            <div className = {styles.ticketList}>
                <TicketList isLoading = {isLoading} onSelect = {onSelect} selectedTicket = {selectedTicket} onCheck = {onCheck} checkedTicketIds = {checkedTicketIds} ticketList = {ticketList}/>
            </div>
            <div className = {styles.conversations}>
                <TicketInbox addConversation = {addConversation} updateTicket = {updateTicket}  projectsList = {projectsList} ticketList = {ticketList} isLoading = {isLoading} usersList = {usersList} onDelete = {onDelete} selectedTicket = {selectedTicket}/>
            </div>
        </div>
    )
}

export default TicketPreviewContainer;