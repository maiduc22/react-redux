const increment = () => {
    return {
        type: 'Increase'
    }
}

const decrement = () => {
    return {
        type: 'Decrease'
    }
}

export default {
    increment, decrement
}