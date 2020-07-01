import React from 'react'
import { connect } from 'react-redux'
import { addOwner } from '../actions/addOwner'

class OwnerForm extends React.Component {

    state = {
        name: '',
        email: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addOwner(this.state)
        this.setState({
            name: '',
            email: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Owner Name</label>
                    <input type="text" placeholder='Name' value={this.state.name} name='name' onChange={this.handleOnChange} /><br></br>
                    <label>Owner Email</label>
                    <input type="text" placeholder='Email' value={this.state.email} name='email' onChange={this.handleOnChange} /><br></br>
                    <input type='Submit' /> 
                </form>
            </div>
        )
    }
}


export default connect(null, { addOwner })(OwnerForm)