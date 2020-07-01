export const addOwner = (formData) => {

    return(dispatch) => {
        fetch('http://localhost:3001/api/v1/owners', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(owner => dispatch({type: 'ADD_OWNER', payload: owner}))
    }
}