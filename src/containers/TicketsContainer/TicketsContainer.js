import React from "react";
import TicketDetail from "../../components/Pages/TicketDetail";
import TicketListViewSearchPage from "../../components/Pages/TicketListViewSearchPage";
import styles from "./TicketsContainer.module.css";

class TicketsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdateTicket = this.handleUpdateTicket.bind(this);
    }

    handleUpdateTicket() {
        //
    }

    render() {
        return (
            <div className = {styles.ticketContainer}>
                <div style = {{
                    height: "6vh", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "flex-start",
                    padding: "0 2rem", 
                    borderBottom: "0.5px solid #DEDEDE"
                }}>Tickets</div>
                <div className = {styles.container}>
                    <div className = {styles.listView}>
                        <TicketListViewSearchPage />
                    </div>
                    <div>
                        <TicketDetail/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TicketsContainer;