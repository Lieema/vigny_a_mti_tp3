import React from 'react'
import { connect } from 'react-redux'
import { deleteTweet } from '../actions';
import UpdateForm from './UpdateFormTweet';

const tweetStyle = {
    width: '80%',
    position: 'relative',
    border: '15px solid blue',
    padding: '25px',
    margin: 'auto',
    marginBottom: '15px'
}

const closeStyle = {
    cursor: 'pointer',
    textAlign: 'right',
    color: 'red',
    top: '15px', 
    right: '0',
    position: 'absolute',
    padding: '12px 16px',
    transform: 'translate(0%, -50%)'
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
                    <span style={closeStyle} onClick={() => store.dispatch(deleteTweet({id: el.id}))}>X</span>
                </h3>
                <p>
                    {el.content}
                </p>
                <UpdateForm id={el.id} author={el.author} date={el.date} content={el.content} />
            </li>
        )}
    </ul>
)}

const List = connect(mapStateToProps)(tweetList)

export default List