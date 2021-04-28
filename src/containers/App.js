import {connect} from 'react-redux';
import App from '../App';
import { getPoemListApi, delPoemApi } from '../firebase/firebase';
import * as action from '../action/action'


const mapStateToProps = state => {
    const { poemList } = state.loadReducer 

    const props = {
        ...state.deleteReducer,
        ...state.sendReducer,
        ...state.loadReducer
    }

    if(!poemList){
        return {
            props 
        }
    }
    return {
        ...props,
        poemList: poemList

    }
}

const mapDispatchToProps = dispatch => ({
    onPoemListLoad: () => {
        getPoemListApi(dispatch)
    },
    onPoemDelete: async(poemId) => {
        try {
            dispatch(action.deletePoemPending())
            await delPoemApi(poemId)
            dispatch(action.deletePoemSuccess())
        } catch (error) {
            alert('Delete is failure. Try again please.')
            dispatch(action.deletePoemFailure())
            
        }
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(App)