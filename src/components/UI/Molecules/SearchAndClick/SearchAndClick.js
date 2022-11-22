// import { Button } from "antd"
// import { useState } from "react"
// import InputField from "../../Atoms/Input/Input"

// const SearchAndClick = ({btnText}) => {

//     const [searchStr, setSearchStr] = useState("")

//     const handleChange = (value) => {
//         console.log(value)
//         setSearchStr(value);
//     }

//     const handleSubmit = () => {
//         console.log(searchStr);
//     }

//     return (
//         <form style = {{
//             display: "flex", 
//             flexDirection: "row", 
//             alignItems: "center", 
//             justifyContent: "space-between"
//         }}>
//             <InputField placeholder={"Search"}/>
//             <Button style = {{
//                 backgroundColor: "#2A5BED", 
//                 border: "none", 
//                 color: "white"
//             }} onClick={handleSubmit}>{btnText}</Button>
//         </form>
//     )
// }

// export default SearchAndClick;

// SearchAndClick.defaultProps = {
//     btnText: "Create Project"
// }