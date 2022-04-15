import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducer from './reducers/allReducer'
import ReactDOM from 'react-dom'
import App from './App'


const store = createStore(allReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));