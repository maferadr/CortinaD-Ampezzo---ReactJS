import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

//GetFirestore : Para obtener la base de datos
// Collection: para poder trabajar con las colecciones anadidas al Firebase 
// AddDoc: para anadir cualquier documento que no haya sido previamente creado 

const firebaseConfig = {
  apiKey: "AIzaSyCn1sOvdJm8dnZaB2f_KTaBUXKtpnFVpks",
  authDomain: "react-39530-maria.firebaseapp.com",
  projectId: "react-39530-maria",
  storageBucket: "react-39530-maria.appspot.com",
  messagingSenderId: "1066929380124",
  appId: "1:1066929380124:web:5a24fc9c9b50d3523238d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() // consultar la DB

export const cargarBDD = async () =>{
    const promise = await fetch ('./json/meals.json')
    const meals = await promise.json()
    meals.forEach(async (meal) => {
        await addDoc(collection(db, "meals"),{
            idCategoria: meal.idCategoria,
            nombre: meal.nombre,
            menuType: meal.menuType,
            precio: meal.precio,
            stock: meal.stock,
            img: meal.img,
            ingredients: meal.ingredients
        })
    })
}

export const getProductos = async () =>{
    const meals = await getDocs(collection(db, "meals"))
    const items = meals.docs.map(meal =>{
        return {...meal.data(), id: meal.id}
    })
    return items
}

export const getProducto = async(id) =>{
    const each = await getDoc(doc(db, "meals", id))
    const item = {...each.data(), id: each.id}
    return item
}

export const updateProducto =async (id, info) =>{
    await updateDoc(doc(db, "meals", id), info)
}
//Actualizacion de Stock en cada producto 

export const deleteProducto = async (id) =>{
    await deleteDoc(doc(db, "meals", id))
}

