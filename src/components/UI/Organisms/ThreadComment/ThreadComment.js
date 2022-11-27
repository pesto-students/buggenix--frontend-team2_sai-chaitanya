import { Avatar } from "antd";
import styles from "./ThreadComment.module.css";

const ThreadComment = ({content, createdTime, creatorName, main}) => {
    return (
        <div className = {styles.thread_comment}>
            <div className = {styles.thread_title}>
                <div className = {styles.userImg}>
                    <Avatar size={"small"}>{"H"}</Avatar>
                </div>
                <span className = {styles.thread_title}>{creatorName}</span>
                <span className = {styles.thread_time}>{createdTime}</span>
                {main && <span className = {styles.thread_social}>Sent via <span>Twitter</span></span>}
            </div>
            <div className = {styles.thread_description + " " + (main && styles.main)}>
                <div className = {styles.comment}>
                    {content}
                </div>
            </div>
            <div className = {styles.response}>
                <div className = {styles.reply}>
                    {/* <span>Reply</span> */}
                </div>
            </div>
        </div>
    )
}

export default ThreadComment;

// ThreadComment.defaultProps = {
//     content: "Ryan, could you get onto this? Perhaps, you could talk to your manager, get your team acting on it ASAP?"
// }