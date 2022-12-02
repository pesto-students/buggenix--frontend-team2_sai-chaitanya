import { ArrowDownOutlined, HourglassFilled } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./SortByTimeDropdown.module.css";



const SortByTimeDropdown = ({value, onChange}) => {

    const dropdownItem = (label, value) => {
        return (<div onClick={() => onChange("sortBy", value)} style = {{fontSize: "small"}}>{label}</div>)
    }

    const list = [
        {
            label: "All", 
            key: "all"
        }, 
        {
            label: "Date created", 
            key: "created"
        }, 
        {
            label: "Date updated", 
            key: "updated"
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
                        <HourglassFilled/>
                    </div>
                    <div className = {styles.name}>Sort by: <span>{currentLabel}</span></div>
                    <ArrowDownOutlined/>
                </div>
            </Space>
        </Dropdown>
    )
}

export default SortByTimeDropdown;