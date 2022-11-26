import { Dropdown, Select } from "antd";
import styles from "./Configure.module.css";

const ConfigureField = ({category, options, onChange}) => {

    const handleChange = (value) => {
        console.log(value, "changed")
    }
    
    return (
        <div className = {styles.container}>
            <div style = {{
                minWidth: "100px", 
                display: "flex", 
                justifyContent: "flex-end"
            }}>
                <span className = {styles.title}>{category}:</span> 
            </div>
            <Select 
                style={{
                    width: 200
                }}
                dropdownStyle = {{
                    borderRadius: "5px", 
                }}
                defaultValue={options?.[0]?.label}
                onChange = {handleChange}
                options = {options}
            />
        </div>
    )
}

export default ConfigureField;
