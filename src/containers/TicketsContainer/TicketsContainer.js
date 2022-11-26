import React from "react";
import TicketActionBar from "../../components/UI/Organisms/TicketActionBar";
import TicketPreviewContainer from "../TicketPreviewContainer";
import styles from "./TicketsContainer.module.css";

class TicketsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <TicketActionBar/>
                <TicketPreviewContainer/>
            </>
        )
    }
}

export default TicketsContainer;


