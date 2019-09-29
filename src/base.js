import Rebase from 'rebase'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4Z30pfOS-6QyPrrar9x6yFO-0JWiDsDA",
    authDomain: "xipitei-gest.firebaseapp.com",
    databaseURL: "https://xipitei-gest.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base