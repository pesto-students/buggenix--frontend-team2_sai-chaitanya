import { Dropdown, Select } from "antd";
import styles from "./Configure.module.css";

const ConfigureField = ({category, options, onChange, selectedTicket, name}) => {

    const handleChange = (value) => {
        onChange(name, value);
    }

    let value = selectedTicket[name];

    let label;

    if(!value){
        label = "Unassigned"
    } else {
        label = options.find(option => option.value == value)?.label;
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
                value={label}
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
