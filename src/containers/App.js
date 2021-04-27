import {connect} from 'react-redux';
import App from '../App';
import { getPoemListApi } from '../firebase/firebase';
import * as action from '../action/action'


const mapStateToProps = state => {
    const { poemList} = state.rootReducer 
    if(!poemList){
        return {
            ...state.rootReducer
        }
    }
    return {
        ...state.rootReducer

    }
}

const mapDispatchToProps = dispatch => ({
    onPoemListLoad: () => {
        getPoemListApi(dispatch)
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(App)