import { ArrowDownOutlined, RocketFilled, RocketOutlined, TagFilled, TagOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import styles from "./ProjectListDropdown.module.css";


const ProjectListDropdown = ({onChange, value, projectsList = []}) => {


    const dropdownItem = (label, key) => {
        return (<div onClick={() => onChange(key)} style = {{fontSize: "small"}}>{label}</div>)
    }

    const list = projectsList.map(project => {
        const {name, id} = project || {};
        return {
            label: name, 
            key: id
        }
    });

    list.unshift({
        label: "All", 
        key: "all"
    })

    // const list = [
    //     {
    //         label: "All", 
    //         key: "all"
    //     }, 
    //     {
    //         label: "Open", 
    //         key: "open"
    //     }, 
    //     {
    //         label: "In Progress", 
    //         key: "progress"
    //     }, 
    //     {
    //         label: "Under Review", 
    //         key: "review"
    //     }, 
    //     {
    //         label: "Done", 
    //         key: "done"
    //     }, 
    // ]

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
                        <RocketFilled/>
                    </div>
                    <div className = {styles.name}>Status: <span>{currentLabel }</span></div>
                    <ArrowDownOutlined/>
                </div>
            </Space>
        </Dropdown>
    )
}

export default ProjectListDropdown;

