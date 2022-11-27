const filterTickets = (filterAttributes, ticketList) => {

    const {status, type, sortBy, search = ""} = filterAttributes || {};

    let filteredList = [];

    filteredList = ticketList.filter(ticketInfo => {
        const {creatorInfo, description = ""} = ticketInfo || {};
        const {name = ""} = creatorInfo;
        if((name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || (description.toLowerCase().indexOf(search.toLowerCase()) !== -1) ) {
            return true
        } else {
            return false
        }
    })

    if(status !== "all") {
        filteredList = filteredList.filter(ticket => ticket.status == status);
    }

    if(type !== "all") {
        filteredList = filteredList.filter(ticket => ticket.type === type);
    }

    //filter createdTime as well here

    return filteredList;
}

export default filterTickets;