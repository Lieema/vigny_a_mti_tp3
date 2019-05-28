import React from 'react'
import ReactDOM from 'react-dom'
import store from './store';
import { addTweet, deleteTweet, updateTweet } from './actions';
import { Provider } from "react-redux"
import App from './App';

window.store = store
window.addTweet = addTweet
window.deleteTweet = deleteTweet
window.updateTweet = updateTweet

ReactDOM.render
(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)