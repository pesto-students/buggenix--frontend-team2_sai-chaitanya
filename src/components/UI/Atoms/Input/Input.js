import { Input } from "antd"

const InputField = ({placeholder, value, onChange}) => { 
    return (
        <Input style = {{
            height: "2rem", 
            width: "98%",
            margin: "10px 2px"
        }} placeholder={placeholder} value = {value} onChange = {onChange} />
    )
}

export default InputField;


InputField.defaultProps = {
    placeholder: "Search and filter"
}