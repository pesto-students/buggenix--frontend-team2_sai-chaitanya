import { ArrowDownOutlined, TagFilled, TagOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./TicketStatusDropdown.module.css";


const TicketStatusDropdown = ({currentSelection = "All"}) => {

    const dropdownItem = (value) => {
        return (<span style = {{fontSize: "small"}}>{value}</span>)
    }

    const statusList = [
        {
            label: "All", 
            key: "0"
        }, 
        {
            label: "Open", 
            key: "1"
        }, 
        {
            label: "In Progress", 
            key: "2"
        }, 
        {
            label: "Under Review", 
            key: "3"
        }, 
        {
            label: "Done", 
            key: "4"
        }, 
    ]

    const items = statusList.map(status => {
        const {label, key} = status;
        return {
            label: dropdownItem(label), 
            key
        }
    });

    return (
        <Dropdown menu={{items}}>
            <Space>
                <div className = {styles.statusContainer}>
                    <div className = {styles.icon}>
                        <TagFilled/>
                    </div>
                    <div className = {styles.name}>Status: <span>{currentSelection}</span></div>
                    <ArrowDownOutlined/>
                </div>
            </Space>
        </Dropdown>
    )
}

export default TicketStatusDropdown;