const currentUser = (state = {}, action) => {
    switch(action.type){
        case "Set_user":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "Log_out":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;