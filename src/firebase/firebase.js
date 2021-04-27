import firebase from 'firebase/app'
import 'firebase/database'
import { getPoemListSuccess, getPoemListFailure } from '../action/action'

const firebaseConfig = {

    apiKey: process.env.MY_APP_apiKey,
    authDomain: process.env.MY_APP_authDomain,
    projectId: process.env.MY_APP_projectId,
    storageBucket: process.env.MY_APP_storageBucket,
    messagingSenderId: process.env.MY_APP_messagingSenderId,
    appId: process.env.MY_APP_appId

}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export const getPoemListApi = (dispatch) => {
    database.ref('poems/').on('value', snapshot => {
        const poemList = snapshot.val()
        dispatch(getPoemListSuccess(poemList))
    }, error => {
        dispatch(getPoemListFailure(error))
    })
}

