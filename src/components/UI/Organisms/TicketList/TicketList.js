import { Spin } from "antd";
import TicketItem from "../../Molecules/TicketItem/TicketItem"

const TicketList = ({ticketList = [], onCheck, checkedTicketIds, selectedTicket, onSelect, isLoading}) => {

    if(isLoading) {
        return (
            <div>
                <Spin/>
            </div>
        )
    }

    if(ticketList.length === 0) {
        return (
            <div>
                <span>No ticket found</span>
                <span>Try adjusting your search to find what you're looking for</span>
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