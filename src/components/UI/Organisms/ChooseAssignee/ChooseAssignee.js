import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Space } from "antd";
import styles from "./ChooseAssignee.module.css";

const ChooseAssignee = ({name = "Harish"}) => {


    const items = [
            {
                label: <span style = {{fontSize: "smaller", minWidth: "10rem", color: ""}}>Choose an assignee</span>,
                key: "0", 
                disabled: true
            },  
            {
                label: (
                    <div style = {{fontSize: "smaller", color: "#737373"}}>Harish Balasubramanian</div>
                ), 
                key: "1"
            }, 
            {
                type: 'divider',
            },
            {
                label: (
                    <div style = {{fontSize: "smaller", color: "#737373"}}>Aditya Vinayak</div>
                ), 
                key: "2"
            }, 
            {
                type: 'divider',
            },
            {
                label: (
                    <div style = {{fontSize: "smaller", color: "#737373"}}>Anjali Raghunathan</div>
                ), 
                key: "3"
            }, 
            {
                type: 'divider',
            },
            {
                label: (
                    <div style = {{fontSize: "smaller", color: "#737373"}}>Tarun Shakthivel</div>
                ), 
                key: "4"
            } ];

    const onClick = ({key}) => {
        console.log("Clicked on item : " + key); 
    }
          
   

      return (
        <Dropdown menu = {{
            items, 
            onClick
        }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className= {styles.space}>
                <Avatar size={"small"} style = {{
                        backgroundColor: "#F27A57", 
                    }} icon = {!name && <UserOutlined/>}>
                { name && name[0] }
                </Avatar>
                <span style={{
                    color: "black"
                }}>{name ? name : "Unassigned"}</span>
                <DownOutlined style={{
                    color: "black"
                }}/>
            </Space>
          </a>
        </Dropdown>
      );

}

export default ChooseAssignee;