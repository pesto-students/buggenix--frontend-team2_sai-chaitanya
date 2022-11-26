import { SearchOutlined } from "@ant-design/icons";
import SortByTimeDropdown from "../../Molecules/SortByTimeDropdown";
import TicketStatusDropdown from "../../Molecules/TicketStatusDropdown";
import TicketTypeDropdown from "../../Molecules/TicketTypeDropdown/TicketTypeDropdown";
import styles from "./TicketActionBar.module.css";

const TicketActionBar = () => {
    return (
        <div className = {styles.ticket_action_bar}>
            <div className = {styles.search}>
                <form className = {styles.form}>
                    <SearchOutlined/>
                    <input placeholder = "Search tickets" maxlength = "100"/>
                </form>
            </div>
            <div className = {styles.actions}>
                <div className = {styles.statusDropdown}>
                    <TicketStatusDropdown/>
                    <TicketTypeDropdown />
                    <SortByTimeDropdown/>
                </div>
            </div>

        </div>
    )
}

export default TicketActionBar;