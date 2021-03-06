import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyA2FGyhcZXik-aF1abyE582V8lzY2Y84lY",
    authDomain: "sample-stationay.firebaseapp.com",
    databaseURL: "https://sample-stationay.firebaseio.com",
    projectId: "sample-stationay",
    storageBucket: "sample-stationay.appspot.com",
    messagingSenderId: "883910062803",
    appId: "1:883910062803:web:6a562d5986d9a0798b5a26",
    measurementId: "G-6ZW22VMJN4"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapshot = userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error in creating user',error.message);
        }
        
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;