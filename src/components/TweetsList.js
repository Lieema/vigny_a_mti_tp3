import React from 'react'
import { connect } from 'react-redux'

const tweetStyle = {
    width: '80%',
    border: '15px solid blue',
    padding: '25px',
    margin: 'auto',
    marginBottom: '15px'
}

const mapStateToProps = (state) => {
    return {tweets: state.tweets}
}

const tweetList = ({tweets}) => {
    return (
    <ul>
        {tweets.map(el =>
            <li style={tweetStyle} key={el.id}>
                <h3>
                    {el.id} | {el.author} | {el.date}
                </h3>
                <p>
                    {el.content}
                </p>
            </li>
        )}
    </ul>
)}

const List = connect(mapStateToProps)(tweetList)

export default List