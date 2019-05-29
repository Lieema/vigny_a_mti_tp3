import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addTweet } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        updateTweet: (tweet) => dispatch(updateTweet(tweet))
    }
}

class UpdateFormTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            date: props.date,
            author: props.author,
            content: props.content
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const {id, date, author, content } = this.state
        this.props.updateTweet({id, date, author, content})
        this.setState({author: author, content: content})
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
                    UPDATE
                </button>
            </form>
        )
    }
}

const UpdateForm = connect(null, mapDispatchToProps)(UpdateFormTweet)

export default UpdateForm