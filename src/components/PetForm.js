import React from 'react'
import { connect } from 'react-redux'
import { addPet } from '../actions/addPet'


class PetForm extends React.Component {

    state = {
        name: '',
        kind: '',
        age: '',
        breed: ''

    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addPet(this.state)
        this.setState({
            name: '',
            kind: '',
            age: '',
            breed: ''
        })
    }


    render() {
        return (
            <h3>
                <form onSubmit={this.handleOnSubmit}>
                <h1>Add A New Pet</h1> <br></br>
                    <label>Pet Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange}/><br></br>
                    <label>Pet Kind:</label>
                    <input type='text' name='kind' value={this.state.kind} onChange={this.handleOnChange} /><br></br>
                    <label>Pet Age:</label>
                    <input type='text' name='age' value={this.state.age} onChange={this.handleOnChange} /><br></br>
                    <label>Pet Breed:</label>
                    <input type='text' name='breed' value={this.state.breed} onChange={this.handleOnChange} /><br></br>
                    <input type='submit' />
                </form>
            </h3>
        )
    }
}

export default connect(null, { addPet })(PetForm)