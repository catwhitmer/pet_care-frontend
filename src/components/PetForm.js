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

    hanldeOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addPet(this.state, this.props.owner.id)
        this.setState({
            name: '',
            kind: '',
            age: '',
            breed: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                Add A New Pet here! <br></br>
                    <label>Pet Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.hanldeOnChange}/><br></br>
                    <label>Pet Kind:</label>
                    <input type='text' name='kind' value={this.state.kind} onChange={this.hanldeOnChange} /><br></br>
                    <label>Pet Age:</label>
                    <input type='text' name='age' value={this.state.age} onChange={this.hanldeOnChange} /><br></br>
                    <label>Pet Breed:</label>
                    <input type='text' name='breed' value={this.state.breed} onChange={this.hanldeOnChange} /><br></br>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, { addPet })(PetForm)