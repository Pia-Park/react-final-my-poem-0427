import firebase from 'firebase/app'
import 'firebase/database'
import { getPoemListSuccess, getPoemListFailure } from '../action/action'

const firebaseConfig = {
    apiKey: process.env.MY_APP_apiKey,
    authDomain: process.env.MY_APP_authDomain,
    projectId: process.env.MY_APP_projectId,
    storageBucket: process.env.MY_APP_storageBucket,
    messagingSenderId: process.env.MY_APP_messagingSenderId,
    appId: process.env.MY_APP_appId,
    databaseURL: "https://mypoem-7870e-default-rtdb.firebaseio.com/"
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


export const sendPoemApi = newPoem => {
    const {
        id,
        title,
        content,
        createdAt
    } = newPoem

    return new Promise((resolve, reject) => {
        database.ref('poems/' + id).set({
            title,
            content,
            created_at: createdAt
        }).then(() => resolve()).catch(() => reject())
    })
}

export const delPoemApi = poemId => {
    return new Promise((resolve, reject) => {
        database.ref('poems/' + poemId).set(null).then(() => resolve()).catch(() => reject())
    })
}
