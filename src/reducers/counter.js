const counter = (state = 1, action) => {
    switch(action.type){
        case "Increase":
            return state + 1
        case "Decrease":
            return state - 1
        default: 
            return state
    }
}

export default counter