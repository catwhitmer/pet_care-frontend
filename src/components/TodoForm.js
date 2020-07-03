import React from 'react' 
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo'

class TodoForm extends React.Component {

    state = {
        description: '',
        notes: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state, this.props.owner.id)
        this.setState({
            description: '',
            notes: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <h1>Add a New Todo</h1>
                    <label>description</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.hanldeOnChange} /><br />
                    <label>notes</label>
                    <input type='text' name='notes' value={this.state.notes} onChange={this.hanldeOnChange} /><br />
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo }) (TodoForm)