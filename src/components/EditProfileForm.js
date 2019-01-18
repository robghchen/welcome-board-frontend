import React, { Component, Fragment } from 'react'

class EditProfileForm extends Component {
    constructor(props){
        super(props);

        this.submitHandler = this.submitHandler.bind(this);
    }

    render(){
        return (
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="full_name">Full Name: </label>
                    <input type="text" name="full_name" value={this.props.currentUser.fullName} />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="mod">Mod #: </label>
                    <select name="mod" id="mod" value={this.props.currentUser.modId}>
                        {this.getMods()}
                    </select>
                    <button>Update</button>
                </form>
            </Fragment>
        );
    }

    getMods(){
        return this.props.mods.map(mod => <option value={mod.id}>mod.rank</option>)
    }

    submitHandler(e){
        e.preventDefault()

        e.target.reset()
    }
}

export default EditProfileForm; 