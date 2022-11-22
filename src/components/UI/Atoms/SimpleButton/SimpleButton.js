import { Button } from "antd"

const SimpleButton = ({btnText, bgColor, txtColor, fontSize, onClick}) => {

    const handleClick = () => {
        onClick();
    }

    return (
        <Button style ={{
            color: txtColor,
            backgroundColor: bgColor, 
            fontSize: fontSize
        }} onClick = {handleClick}>{btnText}</Button>
    )
}

export default SimpleButton;