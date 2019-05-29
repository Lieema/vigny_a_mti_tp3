import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addTweet } from '../actions';
import store from '../store';

function mapDispatchToProps(dispatch) {
    return {
        updateTweet: (tweet) => dispatch(updateTweet(tweet))
    }
}

class UpdateFormTweet extends Component {
    constructor(props) {
        super(props);

        this.parentTweet = {
            id: props.id,
            date: props.date,
            author: props.author,
            content: props.content
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.parentTweet.author = document.getElementById('author_update_' + this.parentTweet.id).value
        this.parentTweet.content = document.getElementById('content_update_' + this.parentTweet.id).value
        store.dispatch(updateTweet(this.parentTweet))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author_update">Author</label>
                    <input 
                        type="text"
                        className="form-control"
                        id={"author_update_" + this.parentTweet.id}
                    />
                    <label htmlFor="content_update">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id={"content_update_" + this.parentTweet.id}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    UPDATE
                </button>
            </form>
        )
    }
}

const UpdateForm = connect(null, mapDispatchToProps)(UpdateFormTweet)

export default UpdateForm