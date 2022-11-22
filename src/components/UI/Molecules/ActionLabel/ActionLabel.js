const ActionLabel = ({type, description, createdTime}) => {

    if(type == "ticketUpdate") {
        return (
            <div>
                
            </div>
        )
    } 

    
    return (
        <div>
            <span></span>
        </div>
    )
}

export default ActionLabel;

//type:  enum["ticketUpdate", "note", "reply"]