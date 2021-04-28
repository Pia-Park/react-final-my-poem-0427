export const GET_POEM_LIST_SUCCESS = 'GET_POEM_LIST_SUCCESS'
export const GET_POEM_LIST_FAILURE = 'GET_POEM_LIST_FAILURE'

export const ADD_NEW_POEM_PENDING = 'ADD_NEW_POEM_PENDING'
export const ADD_NEW_POEM_SUCCESS = 'ADD_NEW_POEM_SUCCESS'
export const ADD_NEW_POEM_FAILURE = 'ADD_NEW_POEM_FAILURE'

export const DELETE_NEW_POEM_PENDING = 'DELETE_NEW_POEM_PENDING'
export const DELETE_NEW_POEM_SUCCESS = 'DELETE_NEW_POEM_SUCCESS'
export const DELETE_NEW_POEM_FAILURE = 'DELETE_NEW_POEM_FAILURE'




export const getPoemListSuccess = (poemList) => ({
    type: GET_POEM_LIST_SUCCESS,
    payload: poemList
})

export const getPoemListFailure = (error) => ({
    type: GET_POEM_LIST_FAILURE,
    error
})

export const addNewPoemPending = () => ({
    type: ADD_NEW_POEM_PENDING
})

export const addNewPoemSuccess = (newPoem) => ({
    type: ADD_NEW_POEM_SUCCESS,
    payload: newPoem
})

export const addNewPoemFailure = (error) => ({
    type: ADD_NEW_POEM_FAILURE,
    error
})



export const deletePoemPending = () => ({
    type: DELETE_NEW_POEM_PENDING
})

export const deletePoemSuccess = () => ({
    type: DELETE_NEW_POEM_SUCCESS,
})

export const deletePoemFailure = (error) => ({
    type: DELETE_NEW_POEM_FAILURE,
    error
})

