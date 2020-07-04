export default function ownerReducer(state = {owners: []}, action) {

    switch (action.type){
        case 'FETCH_OWNERS':
            return {owners: action.payload}
        case 'ADD_OWNER':
            return {...state, owners: [...state.owners, action.payload]}
        case 'ADD_PET':
              return {...state, owners: state.owners.map(owner => {
                 if (owner.id === action.payload) {
                     return action.payload
                 } else {
                     return owner
                 }
             })}
        case 'DELETE_PET':
            return {...state, owners: state.owners.map(owner => {
                 if (owner.id === action.payload) {
                     return action.payload
                 } else {
                     return owner
                 }
             })}
        case 'ADD_TODO':
             return {...state, owners: state.owners.map(owner => {
                 if (owner.id === action.payload) {
                     return action.payload
                 } else {
                     return owner
                 }
             })}

        default:
            return state
    }
}
