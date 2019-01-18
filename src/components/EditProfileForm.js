import React, { Component, Fragment } from 'react'

class EditProfileForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            
            id: this.props.currentUser.id,
            full_name: this.props.currentUser.full_name,
            password: this.props.currentUser.password,
            mod_id: this.props.currentUser.mod_id
    
    }

        this.submitHandler = this.submitHandler.bind(this);
    }

    render(){
        return (
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="full_name">Full Name: </label>
                    <input type="text" name="full_name" onChange={this.changeHandler} value={this.state.full_name} />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.changeHandler} />
                    <label htmlFor="mod">Mod #: </label>
                    <select name="mod_id" id="mod_id" onChange={this.changeHandler} value={this.state.mod_id}>
                        {this.getMods()}
                    </select>
                    <button>Update</button>
                </form>
            </Fragment>
        );
    }

    getMods(){
        return this.props.mods.map(mod => <option key={mod.id} value={mod.id}>{mod.rank}</option>)
    }

    submitHandler(e){
        e.preventDefault()
        this.props.updateHandler(this.state)
        e.target.reset()
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]:  event.target.value
        });
      };
}

export default EditProfileForm; 