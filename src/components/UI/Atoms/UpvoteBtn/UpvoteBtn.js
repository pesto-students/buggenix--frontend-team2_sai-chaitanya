import { UpOutlined } from "@ant-design/icons";
import { Button } from "antd";

const UpvoteBtn = ({count = 0}) => {
    return (
       <Button>
            <UpOutlined />
            <span>{count}</span>
       </Button>
    )
}

export default UpvoteBtn;

