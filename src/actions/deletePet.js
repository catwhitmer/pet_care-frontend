export const deletePet = (ownerId, petId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/owners/${ownerId}/pets/${petId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(owner => dispatch({type: 'DELETE_PET', payload: owner}))
    }
}
