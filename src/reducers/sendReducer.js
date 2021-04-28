import {
    ADD_NEW_POEM_FAILURE, 
    ADD_NEW_POEM_PENDING, 
    ADD_NEW_POEM_SUCCESS,
    GET_POEM_LIST_FAILURE
} from '../action/action'

const sendInitState = {
    isSendError: false,
    isSending: false
}

const sendReducer = (state = sendInitState, action) => {
    switch (action.type) {
        case ADD_NEW_POEM_PENDING:
            return {
                isSendError: false,
                isSending: true
            } 
        case ADD_NEW_POEM_SUCCESS:
            return {
                isSendError: false,
                isSending: false
            } 
        case GET_POEM_LIST_FAILURE:
            return {
                isSendError: true,
                isSending: false
            }  
        default:
            return state;
    }
}

export default sendReducer