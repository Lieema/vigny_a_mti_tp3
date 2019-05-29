// App.js
import React from 'react'
import { hot } from 'react-hot-loader'
import List from './components/TweetsList';
import AddForm from './components/AddFormTweet';

const App = () => (
    <div>
        <h2>
            Add Tweet
        </h2>
        <AddForm />
        <br/>
        <br/>
        <h2>
            Tweets
        </h2>
        <List />
    </div>
)

export default hot(module)(App)