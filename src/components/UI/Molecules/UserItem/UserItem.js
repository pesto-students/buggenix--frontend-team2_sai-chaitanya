import { DeleteFilled } from "@ant-design/icons"
import { Popconfirm } from "antd"
import { useState } from "react"

const UserItem = ({username, email, role, id, onClick, status}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleDelete = () => {
        onClick(id);
    }

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => {
        setIsHovered(false);
    }
    

    return (
        <tr style = {{
            backgroundColor: isHovered ? "#B9C8FE" : "white", 
            cursor: "pointer"
        }} onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut}>
            <td>{!username ? <span style = {{color: "grey"}}>(Invitation pending)</span> : username} </td>            
            <td>{email}</td>
            <td>{role}</td>
            <td>
            <Popconfirm
                title="Are you sure?"
                onConfirm={handleDelete}
                okText="Yes"
                cancelText="No"
            >
                <DeleteFilled style = {{color: "grey", cursor: 'pointer'}}/>
            </Popconfirm>
            </td>
        </tr>
    )
}

export default UserItem;