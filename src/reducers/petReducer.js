export default function petReducer(state = {pets: []}, action) {

    switch (action.type){
        case 'FETCH_PETS':
            return {pets: action.payload}
        case 'ADD_PET':
            return {...state, pets: [...state.pets, action.payload]}
        case 'DELETE_PET':
            let pets = state.pets.map(pet => {
                if (pet.id === action.payload.id) {
                    return action.payload
                } else {
                    return pet
                }
             })
             return {...state, pets: pets}
        case 'ADD_TODO':
            let petsTwo = state.pets.map(pet => {
                if (pet.id === action.payload.id) {
                    return action.payload
                } else {
                    return pet
                }
             })
             return {...state, pets: petsTwo}
        case 'DELETE_TODO':
            let petsThree = state.pets.map(pet => {
                if (pet.id === action.payload.id) {
                    return action.payload
                } else {
                    return pet
                }
             })
             return {...state, pets: petsThree}
        default:
            return state
    }
}
