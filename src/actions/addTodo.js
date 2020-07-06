export const addTodo = (todo, ownerId, petId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/owners/${ownerId}/pets/${petId}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(resp => resp.json())
        .then(owner => dispatch({type: 'ADD_TODO', payload: owner}))
    }
}