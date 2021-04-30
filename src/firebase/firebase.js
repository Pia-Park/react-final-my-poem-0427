import firebase from 'firebase/app'
import 'firebase/database'

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

export default database