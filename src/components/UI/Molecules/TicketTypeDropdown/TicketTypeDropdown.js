import { ArrowDownOutlined, FunnelPlotFilled } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./TicketTypeDropdown.module.css";


const TicketTypeDropdown = ({value, onChange}) => {

    const dropdownItem = (label, value) => {
        return (<div onClick={() => onChange("type", value)} style = {{fontSize: "small"}}>{label}</div>)
    }

    const list = [
        {
            label: "All", 
            key: "all"
        }, 
        {
            label: "General Feedback", 
            key: "feedback"
        }, 
        {
            label: "Bug Report", 
            key: "bug"
        }, 
        {
            label: "Feature Request", 
            key: "feature"
        }
    ]

    const items = list.map(status => {
        const {label, key} = status;
        return {
            label: dropdownItem(label, key), 
            key
        }
    });

    const currentLabel = list.find(item => item.key == value).label;


    return (
        <Dropdown menu={{items}}>
            <Space>
                <div className = {styles.statusContainer}>
                    <div className = {styles.icon}>
                        <FunnelPlotFilled />
                    </div>
                    <div className = {styles.name}>Type: <span>{currentLabel}</span></div>
                    <ArrowDownOutlined/>
                </div>
            </Space>
        </Dropdown>
    )
}

export default TicketTypeDropdown;