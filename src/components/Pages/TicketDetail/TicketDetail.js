import DeleteBtn from "../../UI/Atoms/DeleteBtn";
import StatusToggleBtn from "../../UI/Atoms/StatusToggleBtn";
import UpvoteBtn from "../../UI/Atoms/UpvoteBtn";
import TicketCreatorInfo from "../../UI/Molecules/TicketCreatorInfo";
import TicketResponse from "../../UI/Molecules/TicketResponse";
import ChooseAssignee from "../../UI/Organisms/ChooseAssignee";
import ChooseTicketType from "../../UI/Organisms/ChooseTicketType";
import MoveToProject from "../../UI/Organisms/MoveToProject";
import TicketResponseInput from "../../UI/Organisms/TicketResponseInput/TicketResponseInput";
import styles from "./TicketDetail.module.css";

const TicketDetail = ({title, subject}) => {
    return (
        <div className = {styles.container}>
            <div className= {styles.ticketDetailHeader}>
                <div>
                    <StatusToggleBtn/>
                    <UpvoteBtn />
                </div>
                <div className= {styles.headerRight}>
                    <ChooseAssignee/>
                    <ChooseTicketType />
                    <MoveToProject/>
                    <DeleteBtn/>
                </div>

            </div>
            <TicketCreatorInfo />
            <span>{title}</span>
            <div className = {styles.conversations}>
                <TicketResponse type = "note"/>
                <TicketResponse type = "note"/>
                <TicketResponse type = "note"/>
                <TicketResponse type = "note"/>
                <TicketResponse type = "reply"/>
            </div>
            <div className = {styles.replyInput}>
                <TicketResponseInput/>
            </div>
        </div>
    )
}

export default TicketDetail;

TicketDetail.defaultProps = {
    title: "I love the web app, would love to have more integrations"
}