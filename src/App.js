// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import List from './components/TweetsList';

const App = () => (
    <div>
        <h2>
            Tweets
        </h2>
        <List />
    </div>
)

export default hot(module)(App)