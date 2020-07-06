export function fetchOwners() {
   return (dispatch) => {
    fetch('http://localhost:3001/api/v1/owners')
    .then(resp => resp.json())
    .then(owners => dispatch({
        type: 'FETCH_OWNERS',
        payload: owners
    }))
   }
}