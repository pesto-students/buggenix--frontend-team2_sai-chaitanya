import { ArrowDownOutlined, HourglassOutlined, TagFilled } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./SortByTimeDropdown.module.css";



const SortByTimeDropdown = ({currentSelection = "Date created"}) => {

    const dropdownItem = (value) => {
        return (<span style = {{fontSize: "small"}}>{value}</span>)
    }

    const statusList = [
        {
            label: "Date created", 
            key: "1"
        }, 
        {
            label: "Date updated", 
            key: "2"
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
                        <HourglassOutlined/>
                    </div>
                    <div className = {styles.name}>Sort by: <span>{currentSelection}</span></div>
                    <ArrowDownOutlined/>
                </div>
            </Space>
        </Dropdown>
    )
}

export default SortByTimeDropdown;