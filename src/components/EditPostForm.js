import React, { Component } from 'react'

class EditPostForm extends Component {
    state = {
        input: this.props.post.content,
    }

    changeHandler = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editPostHandler(this.props.post.id, this.state.input)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Edit post" value={this.state.input} onChange={this.changeHandler}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default EditPostForm;
