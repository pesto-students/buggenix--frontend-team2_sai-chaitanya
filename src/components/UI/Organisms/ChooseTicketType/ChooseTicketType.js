import { DownOutlined, SmileOutlined, TagOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Space } from "antd";
import styles from "./ChooseTicketType.module.css";

const ChooseTicketType = ({name = "Harish"}) => {


    const items = [ {
                        label: <span style = {{fontSize: "smaller", minWidth: "10rem", color: ""}}>Choose a ticket type</span>,
                        key: "0", 
                        disabled: true
                    },  
                    {
                        label: (
                            <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>Bug report</div>
                        ), 
                        key: "1"
                    }, 
                    {
                        type: 'divider',
                    },
                    {
                        label: (
                            <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>General feedback</div>
                        ),
                        key: "2"
                    }, 
                    {
                        type: 'divider',
                    },
                    {
                        label: (
                            <div style = {{fontSize: "smaller", minWidth: "10rem", color: "#737373"}}>Feature request</div>
                        ), 
                        key: "3"
                    }];


    const onClick = ({key}) => {
        console.log("Clicked on item : " + key); 
    }
          
   

      return (
        <Dropdown className= {styles.dropdownContainer} menu = {{
            items, 
            onClick
        }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{
                    color: "black"
                }}>
                < TagOutlined/>
            </Space>
          </a>
        </Dropdown>
      );

}

export default ChooseTicketType;