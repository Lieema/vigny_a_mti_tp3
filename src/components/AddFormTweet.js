import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addTweet } from '../actions';
import store from '../store';

function mapDispatchToProps(dispatch) {
    return {
        addTweet: (tweet) => dispatch(addTweet(tweet))
    }
}

class AddFormTweet extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { author, content } = { author: document.getElementById('author').value, content: document.getElementById('content').value }
        var dateNow = new Date()
        const date = dateNow.getDate() + "-" + (dateNow.getMonth() + 1) + "-" +
                    dateNow.getFullYear()
        const id = uuidv1()
        store.dispatch(addTweet({id, date, author, content}))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="author"
                    />
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    ADD
                </button>
            </form>
        )
    }
}

const AddForm = connect(null, mapDispatchToProps)(AddFormTweet)

export default AddForm