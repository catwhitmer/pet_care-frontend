export const addPet = (pet, ownerId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/owners/${ownerId}/pets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        })
        .then(resp => resp.json())
        .then(owner => dispatch({type: 'ADD_PET', payload: owner}))
    }
}