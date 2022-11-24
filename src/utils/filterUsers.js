export const filterUsers = (peopleList, searchStr) => {
    return peopleList.filter(person => {
        const {username = "", email} = person || {};

        if(username.toLowerCase().indexOf(searchStr) !== -1 || email.toLowerCase().indexOf(searchStr) !== -1) {
            return true;
        } else {
            return false;
        }
    })
}


