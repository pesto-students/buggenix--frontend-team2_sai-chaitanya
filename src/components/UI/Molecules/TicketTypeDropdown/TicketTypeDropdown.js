import { ArrowDownOutlined, FunnelPlotFilled } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./TicketTypeDropdown.module.css";


const TicketTypeDropdown = ({currentSelection = "All"}) => {

    const dropdownItem = (value) => {
        return (<span style = {{fontSize: "small"}}>{value}</span>)
    }

    const statusList = [
        {
            label: "All", 
            key: "0"
        }, 
        {
            label: "General Feedback", 
            key: "1"
        }, 
        {
            label: "Bug Report", 
            key: "2"
        }, 
        {
            label: "Feature Request", 
            key: "3"
        }
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
                        <FunnelPlotFilled />
                    </div>
                    <div className = {styles.name}>Type: <span>{currentSelection}</span></div>
                    <ArrowDownOutlined/>
                </div>
            </Space>
        </Dropdown>
    )
}

export default TicketTypeDropdown;