import {
    DELETE_NEW_POEM_FAILURE,
    DELETE_NEW_POEM_SUCCESS,
    DELETE_NEW_POEM_PENDING
} from '../action/action'

const deleteInitState = {
    isDeleteError: false,
    isDelete: false
}

const deleteReducer = (state = deleteInitState, action) => {
    switch (action.type) {
        case DELETE_NEW_POEM_PENDING:
            return {
                isDeleteError: false,
                isDelete: true
            }
        case DELETE_NEW_POEM_SUCCESS:
            return {
                isDeleteError: false,
                isDelete: false
            }
        case DELETE_NEW_POEM_FAILURE:
            return {
                isDeleteError: true,
                isDelete: false
            }
    
        default:
            return state;
    }
}

export default deleteReducer