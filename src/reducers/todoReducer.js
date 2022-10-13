const initialState = [
    {
        id: 0,
        description: 'Wake up at 7 AM and bring breakfast'
    },
    {
        id: 1,
        description: 'Contact Exise Office'
    },
    {
        id: 2,
        description: 'Visit to property dealer'
    }
]

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]

        case 'DELETE_TODO':
            const existingLocation = getExistingPlace(state, action.id)
            state.splice(existingLocation, 1)
            return [
                ...state
            ]

        default:
            return state
    }
}

const getExistingPlace = (state, id) => {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === Number(id)) {
            return i
        }
    }
}

export default todoList