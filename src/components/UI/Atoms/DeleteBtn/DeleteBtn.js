import { DeleteOutlined } from "@ant-design/icons"
import { message, Popconfirm } from "antd";


const DeleteBtn = ({onClick}) => {

    const handleClick = () => {
        console.log("ticket deleted");
    }

    const confirm = (e) => {
        console.log(e);
        message.success('Ticket deleted');
    };

    return (
        <Popconfirm
            title="Are you sure you want to delete this ticket?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >
            <DeleteOutlined onClick={handleClick}/>
        </Popconfirm>
    )
}

export default DeleteBtn;