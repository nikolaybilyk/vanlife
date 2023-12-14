import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDrf4TXLgP8OJYpNt6Ir_CrrnvgUwOdQjE",
  authDomain: "vanlife-dfbba.firebaseapp.com",
  projectId: "vanlife-dfbba",
  storageBucket: "vanlife-dfbba.appspot.com",
  messagingSenderId: "505909576200",
  appId: "1:505909576200:web:5c6f788dabae9f9ff947bd"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export default async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

export async function getVan(vanId) {
    const docRef = doc(db, "vans", vanId)
    const vanSnapshot = await getDoc(docRef)

    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function loginUser({ email, password}) {
    if (email === "b@b.com" && password === "p123") {
        return {
            user: {
                id: 123,
                email,
                password,
                name: "Bob"
            },
            token: "Enjoy your pizza, here's your tokens."
        }
    }
    throw {
        message: "Couldn't log the user in"
    }
}