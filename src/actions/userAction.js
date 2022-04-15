const setUser = (userInfo) => {
    return {
        type: "Set_user",
        payload: userInfo
    }
}

const logOut = () => {
    return {
        type: "Log_out"
    }
}

export default {
    setUser,
    logOut
}