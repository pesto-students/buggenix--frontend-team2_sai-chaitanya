import { SearchOutlined } from "@ant-design/icons";
import SortByTimeDropdown from "../../Molecules/SortByTimeDropdown";
import TicketStatusDropdown from "../../Molecules/TicketStatusDropdown";
import TicketTypeDropdown from "../../Molecules/TicketTypeDropdown/TicketTypeDropdown";
import styles from "./TicketActionBar.module.css";

const TicketActionBar = ({onChange, filterAttributes}) => {


    const handleChange = (e) => {
        const {name: type, value} = e.target;
        if(type === "search") {
            onChange(type, value);
        }
    }

    const handleFilterChange = (type, value) => {
        onChange(type, value);
        console.log(type, value, "type and value");
    }

    const { status, type, sortBy, searchStr } = filterAttributes || {};

    return (
        <div className = {styles.ticket_action_bar}>
            <div className = {styles.search}>
                <form className = {styles.form}>
                    <SearchOutlined/>
                    <input placeholder = "Search tickets" name = "search" value = {searchStr} onChange={handleChange} maxLength = "100"/>
                </form>
            </div>
            <div className = {styles.actions}>
                <div className = {styles.statusDropdown}>
                    <TicketStatusDropdown value = {status} onChange = {handleFilterChange} />
                    <TicketTypeDropdown value = {type} onChange = {handleFilterChange}/>
                    <SortByTimeDropdown value = {sortBy} onChange = {handleFilterChange}/>
                </div>
            </div>

        </div>
    )
}

export default TicketActionBar;