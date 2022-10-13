export const addTodo = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: payload
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id: id
    }
}