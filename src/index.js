import React from 'react'
import ReactDOM from 'react-dom'
import store from './store';
import { addTweet, deleteTweet, updateTweet } from './actions';

window.store = store
window.addTweet = addTweet
window.deleteTweet = deleteTweet
window.updateTweet = updateTweet

ReactDOM.render(<div>hello, student</div>, document.getElementById('root'))