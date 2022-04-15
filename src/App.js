import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import allActions from './actions/allActions'


const App = () => {
    const counter = useSelector(state => state.counter)
    const currentUser = useSelector(state => state.currentUser)

    const dispatch = useDispatch()

    const user = {name: "MaiDuc"}
    return (
        <div className="App">
        {
            currentUser.loggedIn ? 
            <>
            <h1>Welcome {currentUser.user.name}</h1>
            <button onClick={() => dispatch(allActions.userAction.logOut())}>Logout</button>
            </> 
            : 
            <>
            <h1>Login</h1>
            <button onClick={() => dispatch(allActions.userAction.setUser(user))}>Login</button>
            </>
            }
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(allActions.counterAction.increment())}>Increase </button>
        <button onClick={() => dispatch(allActions.counterAction.decrement())}>Decrease </button>
        </div>
    );
}

export default App;