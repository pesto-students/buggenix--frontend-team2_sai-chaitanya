import React from "react";
import { addConversation, createTicket, deleteTicket, fetchTickets, updateTicket } from "../../actionCreators/ticketActions";
import TicketActionBar from "../../components/UI/Organisms/TicketActionBar";
import TicketPreviewContainer from "../TicketPreviewContainer";
import {connect} from 'react-redux';
import filterTickets from "../../utils/filterTickets";
import { fetchProjects, updateProject } from "../../actionCreators/projectActions";
import { fetchUsers } from "../../actionCreators/usersActions";


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
            selectedTicket: null
        }
        this.handleTicketCheck = this.handleTicketCheck.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTicketSelect = this.handleTicketSelect.bind(this);
        this.handleCheckAll = this.handleCheckAll.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    

    componentDidMount() {
        const { fetchTickets, fetchProjects, fetchUsers } = this.props;
        fetchTickets && fetchTickets();
        fetchProjects && fetchProjects();
        fetchUsers && fetchUsers();
        console.log("is it mounting?")
    }

    componentDidUpdate(prevProps, prevState) {

        const {ticketList} = this.props;
        const {selectedTicket} = this.state;
        const {id} = selectedTicket || {};

        // if(prevProps.ticketList !== ticketList && prevProps.ticketList.length == 0) {
        if(!selectedTicket && ticketList && ticketList.length > 0) {
            this.setState({
                selectedTicket: ticketList[0]
            })
        } else if(prevProps.ticketList !== ticketList) {
            const newSelectedTicket = ticketList.find(ticket => {
                if(ticket.id === id) {
                    return true
                }
            })
            this.setState({
                selectedTicket: newSelectedTicket
            })
        }
    }

    handleDelete() {

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

        const {ticketList, isLoading, isError, projectsList, selectedProject, updateProject, usersList, createTicket, isTicketsLoading, updateTicket, addConversation, deleteTicket} = this.props;
        const {filterAttributes, checkedTicketIds, selectedTicket} = this.state;
        const _filteredTicketList = filterTickets(filterAttributes, ticketList, selectedProject);

        return (
            <>
                <TicketActionBar createTicket = {createTicket} usersList = {usersList} selectedProject = {selectedProject} updateProject = {updateProject} projectsList = {projectsList} onChange = {this.handleFilterChange} filterAttributes = {filterAttributes}/>
                <TicketPreviewContainer deleteTicket = {deleteTicket} addConversation = {addConversation} updateTicket = {updateTicket} isLoading = {isTicketsLoading} usersList ={usersList} onDelete = {this.handleDelete} onCheckAll = {this.handleCheckAll} onSelect = {this.handleTicketSelect} selectedTicket = {selectedTicket} onCheck = {this.handleTicketCheck} checkedTicketIds = {checkedTicketIds} ticketList = {_filteredTicketList} projectsList = {projectsList} isError = {isError}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    const {tickets, projects, users } = state || {};
    const {usersList} = users || {};
    const {isLoading: isTicketsLoading, data:ticketList, error} = tickets || {};
    const {isLoading: projectsLoading, projectsList, error: projectsError, selectedProject}  = projects || {};

    return {
        selectedProject,
        ticketList, 
        isTicketsLoading, 
        usersList,
        projectsList
        // error, 
        // isLoading
    }
}



export default connect(mapStateToProps, { fetchTickets, updateProject, fetchProjects, fetchUsers, createTicket, updateTicket, deleteTicket, addConversation })(TicketsContainer);

TicketsContainer.defaultProps = {
    // usersList: [ 
    //     {
    //         id: "1", 
    //         email: "harish.balasubramanian@gmail.com", 
    //         name: "Harish", 
    //         role: "admin", 
    //     },
    //     {
    //         id: "2", 
    //         email: "aditya.vinayak@gmail.com", 
    //         name: "Aditya", 
    //         role: "member", 
    //     },
    //     {
    //         id: "3", 
    //         email: "anjali.raghunathan@gmail.com", 
    //         name: "Anjali", 
    //         role: "member", 
    //     },
    //     {
    //         id: "4", 
    //         email: "tarun.shakt@gmail.com", 
    //         name: "Raghul", 
    //         role: "admin", 
    //     }
    // ],
    projectsList: [
        {
            id: 1,  //
            name: "Atonis", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Harsha", 
                role: "admin"
            }, 
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
        }, 
        {
            id: 2, 
            name: "Ink high", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Raghul", 
                role: "admin"
            },  
             createdTime: "Oct 17, 2022", 
             members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ], 
        }, 
        {
            id: 3, 
            name: "MedEasy", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Harish", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ], 
        }, 
        {
            id: 4, 
            name: "Pharma", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Aditya", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]

        }, 
        {
            id: 5, 
            name: "IDC", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Anjali", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ] 
        }, 
        {
            id: 6, 
            name: "IDM", 
            description: "One-stop destination to bringing your startup dreams come true", 
            ticketIds: ["43, 45, 64, 33"], 
            ticketCount: "4", 
            openTicketCount: "2", 
            creator: {
                id: 54, 
                name: "Tharun", 
                role: "admin"
            },  
            createdTime: "Oct 17, 2022", 
            members: [
                {
                    name: "Harish", 
                    id: "446"
                }, 
                {
                    name: "Aditya", 
                    id: "446"
                }, 
                {
                    name: "Tarun", 
                    id: "446"
                }, 
                {
                    name: "Rahul", 
                    id: "446"
                }, 
            ]
        }
    ],
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
        type: null,
        priority: null, 
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
        ], 
        projectId: null

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
        ], 
        projectId: null

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
        ],
        projectId: 5
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
        ], 
        projectId: 4

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
        ], 
        projectId: 3

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
        ], 
        projectId: 2

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
        ], 
        projectId: 1

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
        ], 
        projectId: 5
    }
] 
}


