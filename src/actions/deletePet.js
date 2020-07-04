export const deletePet = (petId, ownerId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/owners/${ownerId}/pets${petId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(owner = dispatch({type: 'DELETE_PET', payload: owner}))
    }
}

export default deletePet