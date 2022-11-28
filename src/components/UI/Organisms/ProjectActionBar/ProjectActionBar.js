import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import SortByTimeDropdown from "../../Molecules/SortByTimeDropdown";
// import TicketStatusDropdown from "../../Molecules/TicketStatusDropdown";
// import TicketTypeDropdown from "../../Molecules/TicketTypeDropdown/TicketTypeDropdown";
import styles from "./ProjectActionBar.module.css";

const ProjectActionBar = ({onChange, searchStr}) => {


    const handleChange = (e) => {
        const {name: type, value} = e.target;
        if(type === "search") {
            onChange(value);
        }
    }

    return (
        <div className = {styles.ticket_action_bar}>
            <div className = {styles.search}>
                <form className = {styles.form}>
                    <SearchOutlined/>
                    <input placeholder = "Search projects" name = "search" value = {searchStr} onChange={handleChange} maxLength = "100"/>
                </form>
            </div>
            <div className = {styles.actions}>
                <Button className = {styles.btn}><PlusOutlined/> Create project</Button>
            </div>

        </div>
    )
}

export default ProjectActionBar;