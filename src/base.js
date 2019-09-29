import Rebase from 'rebase'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({

})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base