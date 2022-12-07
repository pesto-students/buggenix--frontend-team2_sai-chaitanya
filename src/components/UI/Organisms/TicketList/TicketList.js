import { FileSearchOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import TicketItem from "../../Molecules/TicketItem/TicketItem";
import styles from "./TicketList.module.css";

const TicketList = ({ticketList = [], onCheck, checkedTicketIds, selectedTicket, onSelect, isLoading}) => {

    if(isLoading) {
        return (
            <div className = {styles.spin}>
                <Spin/>
            </div>
        )
    }

    if(ticketList.length === 0) {
        return (
            <div className = {styles.noTicketFound}>
                <FileSearchOutlined className = {styles.icon} />
                <span className = {styles.span1}>No ticket found</span>
                <span className = {styles.span2}>Try adjusting your search to find what you're looking for</span>
            </div>
        )
    }

    return (
        <>  
            <div>
                {ticketList.map(ticketItem => {
                    const {id} = ticketItem || {};
                    const isChecked = checkedTicketIds.includes(id);
    
                    return (<TicketItem onSelect = {onSelect} selectedTicket = {selectedTicket} isChecked = {isChecked} onCheck = {onCheck} key = {id} ticketItem = {ticketItem}/>)
                })}
            </div>
        </>
    )
}

export default TicketList;