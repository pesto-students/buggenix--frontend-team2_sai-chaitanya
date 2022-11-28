import React from "react";
import { fetchTickets } from "../../actionCreators/ticketActions";
import TicketActionBar from "../../components/UI/Organisms/TicketActionBar";
import TicketPreviewContainer from "../TicketPreviewContainer";
import {connect} from 'react-redux';
import filterTickets from "../../utils/filterTickets";

class TicketsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterAttributes: {
                status: "all", 
                type: "all", 
                sortBy: "all", 
                search: ""
            }, 
            checkedTicketIds: [], 
            selectedTicket: {
                id: "234342", 
                timestamp: "21 Jan, 2022", 
                creatorInfo: {
                    name: "Harish Balasubramanian", 
                    id: "56739", 
                    type: "customer", 
                    channel: "twitter"
                }, 
                status: "open", 
                conversationCount: "3", 
                assigneeId: null, 
                label: null, 
                description: "We would love to see new and improved features", 
                subject: null, 
                conversations: [
                    {
                        type: "note", 
                        description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                        timestamp: "3 seconds ago", 
                        creatorInfo: {
                            name: "Aditya Vinayak",
                            id: "3256", 
                        }
                    }, {
                        type: "note", 
                        description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                        timestamp: "20 minutes ago", 
                        creatorInfo: {
                            name: "Aditya Vinayak",
                            id: "3256", 
                        }
                    }, {
                        type: "note", 
                        description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                        timestamp: "20 minutes ago", 
                        creatorInfo: {
                            name: "Aditya Vinayak",
                            id: "3256", 
                        }
                    }
                ]
            }, 
        }
        this.handleTicketCheck = this.handleTicketCheck.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTicketSelect = this.handleTicketSelect.bind(this);
        this.handleCheckAll = this.handleCheckAll.bind(this);
    }

    componentDidMount() {
        // const { fetchTickets } = this.props;
        // fetchTickets && fetchTickets()
    }

    componentDidUpdate() {
        if(!this.state.selectedTicket) {

            const {ticketList} = this.props;
            const {id} = ticketList || {};

            this.setState({
                selectedTicket: id
            }) 
        }
    }

    handleTicketSelect(selectedTicket) {
        this.setState({
            selectedTicket
        })
    }

    handleCheckAll(isChecked) {
        const {ticketList} = this.props;

        if(isChecked) {
            const ticketIds = ticketList.map(ticket => ticket.id);
            this.setState({
                checkedTicketIds: ticketIds
            })
        } else {
            this.setState({
                checkedTicketIds: []
            })
        }

    }

    handleTicketCheck(id, checked) {

        const {checkedTicketIds} = this.state;


        if(checked) {
            this.setState({
                checkedTicketIds: [...checkedTicketIds, id]
            })
        } else {
            const prevValue = checkedTicketIds.filter(value => value !== id);

            this.setState({
                checkedTicketIds: prevValue
            })

        }
    }

    handleFilterChange(type, value) {
        
        const {filterAttributes} = this.state;
        const updatedFilterAttributes = {
            ...filterAttributes, 
            [type]: value
        } 
        this.setState({
            filterAttributes: updatedFilterAttributes
        })
    }

    render() {

        const {ticketList, isLoading, isError} = this.props;
        const {filterAttributes, checkedTicketIds, selectedTicket} = this.state;
        const _filteredTicketList = filterTickets(filterAttributes, ticketList);

        return (
            <>
                <TicketActionBar onChange = {this.handleFilterChange} filterAttributes = {filterAttributes}/>
                <TicketPreviewContainer onCheckAll = {this.handleCheckAll} onSelect = {this.handleTicketSelect} selectedTicket = {selectedTicket} onCheck = {this.handleTicketCheck} checkedTicketIds = {checkedTicketIds} ticketList = {_filteredTicketList} isLoading = {isLoading} isError = {isError}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const {tickets} = state || {};
    const {isLoading, data, error} = tickets || {};
    return {
        // ticketList: data, 
        // error, 
        // isLoading
    }
}

export default connect(mapStateToProps, { fetchTickets })(TicketsContainer);

TicketsContainer.defaultProps = {
    isLoading: false, 
    error: "",
    ticketList: [
        {
        id: "234342", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Harish Balasubramanian", 
            id: "56739", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "open", 
        type: "feedback",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234343", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Dwight Shrute", 
            id: "56740", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "open", 
        type: "bug",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Dwight, we will have to take this up. Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "Dwight, we will have to take this up. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234344", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Jim Halpert", 
            id: "56741", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "progress", 
        type: "feature",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234345", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Pam Beasly", 
            id: "56742", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "review",
        type: "feature",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234346", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Stanley", 
            id: "56743", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "review", 
        type: "bug",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago",
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234347", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Dan", 
            id: "56744", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "done", 
        type: "feedback",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234348", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Michael Scott", 
            id: "56745", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "review", 
        type: "bug",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234349", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Michael Scott", 
            id: "56746", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "open", 
        type: "bug",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago",  
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 
    {
        id: "234350", 
        timestamp: "21 Jan, 2022", 
        creatorInfo: {
            name: "Ryan Howard", 
            id: "56742", 
            type: "customer", 
            channel: "twitter"
        }, 
        status: "review", 
        type: "feedback",
        conversationCount: "3", 
        assigneeId: null, 
        label: null, 
        description: "We would love to see new and improved features", 
        subject: null, 
        conversations: [
            {
                type: "note", 
                description: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?", 
                timestamp: "3 seconds ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }, {
                type: "note", 
                description: "I will look into it. In the while, it'll be great if we could also focus on the Acme team's issue", 
                timestamp: "20 minutes ago", 
                creatorInfo: {
                    name: "Aditya Vinayak",
                    id: "3256", 
                }
            }
        ]
    }, 

] 
}


