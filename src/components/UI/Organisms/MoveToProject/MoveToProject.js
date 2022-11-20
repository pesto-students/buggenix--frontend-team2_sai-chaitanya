import { DownOutlined, ShareAltOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Space } from "antd";
import styles from "./MoveToProject.module.css";

const MoveToProject = ({name = "Harish"}) => {


    const items = [
            {
                label: <span style = {{fontSize: "smaller", minWidth: "10rem", color: ""}}>Select a project to move</span>,
                key: "0", 
                disabled: true
            },  
            {
                label: (
                    <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>Atonis</div>
                ), 
                key: "1"
            }, 
            {
                type: 'divider',
            },
            {
                label: (
                    <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>MedEasy</div>
                ), 
                key: "2"
            }, 
            {
                type: 'divider',
            },
            {
                label: (
                    <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>Freshsales</div>
                ), 
                key: "3"
            }, 
            {
                type: 'divider',
            },
            {
                label: (
                    <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>Freshteams</div>
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
            <Space style={{
                    color: "black"
                }}>
                <ShareAltOutlined /> 
            </Space>
          </a>
        </Dropdown>
      );

}

export default MoveToProject;