export const filterUsers = (peopleList, searchStr) => {
    return peopleList.filter(person => {
        const {username = ""} = person || {};

        if(username.toLowerCase().indexOf(searchStr) !== -1) {
            return true;
        } else {
            return false;
        }
    })
}


