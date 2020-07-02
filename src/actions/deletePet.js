export const deletePet = (petId, ownerId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/owners/${ownerId}/pets${petId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(pet = dispatch({type: 'DELETE_PET', payload: pet}))
    }
}

export default deletePet