import { GET_POEM_LIST_FAILURE, GET_POEM_LIST_SUCCESS } from "../action/action";

const initState = {
    isLoading: true,
    isError: false,
    poemList: null
}

const loadReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_POEM_LIST_SUCCESS:
            return{
                isLoading: false,
                isError: false,
                poemList: action.payload
            }

        case GET_POEM_LIST_FAILURE:
            return{
                isLoading: false,
                isError: true,
                poemList: action.payload
            }
                
        default:
            return{
                state
            }
    }
}

export default loadReducer