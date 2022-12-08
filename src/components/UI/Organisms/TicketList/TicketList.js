import TicketItem from "../../Molecules/TicketItem";

const TicketList = ({ticketsList = [], searchStr, onTicketCheck, onTicketSelect, selectedTicketId}) => {

    const _ticketsList = ticketsList.filter(ticket => {
        const {creatorInfo, subject, title} = ticket || {};
        const {name} = creatorInfo || {};

        if((name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) || (subject.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) || (title.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <div style={{
            overflow: "auto", 
        }}>
            {_ticketsList.map(ticketInfo => {
                const {id} = ticketInfo || {}
                return (<TicketItem selectedTicketId = {selectedTicketId} onTicketSelect = {onTicketSelect} key = {id} onTicketCheck={onTicketCheck} ticketInfo = {ticketInfo} />)
            })}
        </div>
    )
}

export default TicketList;
