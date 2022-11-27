import TicketItem from "../../Molecules/TicketItem/TicketItem"

const TicketList = ({ticketList, onCheck, checkedTicketIds, selectedTicket, onSelect}) => {
    return (
        <>
            {ticketList.map(ticketItem => {
                const {id} = ticketItem || {};
                const isChecked = checkedTicketIds.includes(id);

                return (<TicketItem onSelect = {onSelect} selectedTicket = {selectedTicket} isChecked = {isChecked} onCheck = {onCheck} key = {id} ticketItem = {ticketItem}/>)
            })}
        </>
    )
}

export default TicketList;