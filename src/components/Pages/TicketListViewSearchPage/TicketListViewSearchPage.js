import InputField from "../../UI/Atoms/Input";
import { useState } from "react";
import TicketList from "../../UI/Organisms/TicketList/TicketList";
import styles from "./TicketListViewSearchPage.module.css";

const TicketListViewSearchPage = ({ticketsList, onTicketSelect}) => {

    const [searchStr, setSearchStr] = useState("");
    const [checkedTicketIds, setCheckedTicketIds] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(ticketsList?.[0]);
    
    const handleChange = (e) => {
        const {value} = e.target;
        setSearchStr(value);
    }

    const handleTicketCheck = (ticketId, checked) => {

        if(checked) { 
            const newIdList = [...checkedTicketIds, ticketId];
            setCheckedTicketIds(newIdList);
        } else {
            const newIdList = checkedTicketIds.filter(id => id !== ticketId);
            setCheckedTicketIds(newIdList);
        } 
    }

    const handleSelect = (ticketInfo) => {
        setSelectedTicket(ticketInfo);
    }

    return (
        <div className = {styles.container}>
            <InputField value = {searchStr} onChange = {handleChange} placeholder = "Search and filter" />
            <TicketList selectedTicketId = {selectedTicket?.id} searchStr = {searchStr} ticketsList = {ticketsList} onTicketSelect = {handleSelect} onTicketCheck = {handleTicketCheck}/>
        </div>
    )
}

export default TicketListViewSearchPage;

TicketListViewSearchPage.defaultProps = {
    ticketsList: [
        {
            id: "325",
            creatorInfo: {
                name: "Harish", 
                id: "67", 
                type: "customer", 
                channel: "twitter"
            },
            title : "I love the web app, would love to have more integrations", 
            subject: "", 
            timestamp: "17:35", 
        }, {
            id: "326",
            creatorInfo: {
                name: "Abi", 
                id: "68", 
                type: "customer", 
                channel: "facebook"
            },
            title : "I love the web app, would love to have more integrations", 
            subject: "", 
            timestamp: "17:35", 
        }, {
            id: "327",
            creatorInfo: {
                name: "Aditya", 
                id: "70", 
                type: "customer", 
                channel: "twitter"
            },
            title : "I love the web app, would love to have more integrations", 
            subject: "", 
            timestamp: "17:35", 
        }, {
            id: "328",
            creatorInfo: {
                name: "Aditya", 
                id: "71", 
                type: "customer", 
                channel: "twitter"
            },
            title : "I love the web app, would love to have more integrations", 
            subject: "", 
            timestamp: "17:35", 
        }
    ]
}

