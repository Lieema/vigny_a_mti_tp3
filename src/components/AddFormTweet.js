import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addTweet } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        addTweet: (tweet) => dispatch(addTweet(tweet))
    }
}

class AddFormTweet extends Component {
    constructor() {
        super();

        this.state = {
            author: "",
            content: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { author, content } = this.state
        var dateNow = new Date()
        const date = dateNow.getDate() + "-" + (dateNow.getMonth() + 1) + "-" +
                    dateNow.getFullYear()
        const id = uuidv1()
        this.props.addTweet({id, date, author, content})
        this.setState({author: "", content: ""})
    }

    render() {
        const { author, content } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={content}
                        onChange={this.handleChange}
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