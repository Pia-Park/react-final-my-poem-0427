export const GET_POEM_LIST_SUCCESS = 'GET_POEM_LIST_SUCCESS'
export const GET_POEM_LIST_FAILURE = 'GET_POEM_LIST_FAILURE'

export const getPoemListSuccess = (poemList) => ({
    type: GET_POEM_LIST_SUCCESS,
    payload: poemList
})

export const getPoemListFailure = (error) => ({
    type: GET_POEM_LIST_FAILURE,
    error
})