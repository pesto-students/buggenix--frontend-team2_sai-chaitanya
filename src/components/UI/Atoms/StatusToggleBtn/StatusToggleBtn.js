import { Button, Checkbox } from "antd";

const StatusToggleBtn = () => {

    const handleCheck = (e) => {
        console.log(e.target.checked);
    }   
        
    return (
        <Button>
            <Checkbox onChange={handleCheck} />
            <span style={{
                paddingLeft: "8px"
            }}>Done</span>
        </Button>
    )
}

export default StatusToggleBtn;