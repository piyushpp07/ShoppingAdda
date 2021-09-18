import React, { useState, useEffect, createContext } from 'react'
import { auth, database } from '../firebase';

export const StateContext = createContext();


export const StateProvider = (props) => {
   const [user, setUser] = useState()
   const [dataMens, setDataMens] = useState([])
   const [dataWomens, setDataWomens] = useState([])
   const [dataMobile, setDataMobile] = useState([])
   const [dataCart, setDataCart] = useState([])
   const [dataWishlist, setDataWishlist] = useState([])
   const [allData, setAllData] = useState({})
   useEffect(() => {
      auth.onAuthStateChanged(usr => {
         setUser(usr.uid)
      })

      //Mens Data Fetching
      const getMensDataFromFirebase = [];
      database.collection('collection').doc("mens").collection("MensAttire").onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            getMensDataFromFirebase.push({ ...doc.data(), key: doc.id });
         });
         setDataMens(getMensDataFromFirebase);
      });

      //Womens Data Fetching
      const getWomenDataFromFirebase = [];
      database.collection('collection').doc("women").collection("WomenAttire").onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            getWomenDataFromFirebase.push({ ...doc.data(), key: doc.id });
         });
         setDataWomens(getWomenDataFromFirebase);
      });

      //Mobile Data Fetching
      const getMobileDataFromFirebase = [];
      database.collection('collection').doc("mens").collection("WomenAttire").onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            getMobileDataFromFirebase.push({ ...doc.data(), key: doc.id });
         });
         setDataMobile(getMobileDataFromFirebase);
      });

      //Cart Data Fetching
      database.collection('users').doc(user).collection('cart').onSnapshot((a) => {
         const fdata = [];
         a.forEach((item) => {
            fdata.push({ ...item.data(), key: item.id })

         })
         setDataCart(fdata)
      })



      //Wishlist Data from Firebase
      const getWishDataFromFirebase = [];
      database.collection('users').doc(user).collection("wish").onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            getWishDataFromFirebase.push({ ...doc.data(), key: doc.id });
         });
         setDataWishlist(getWishDataFromFirebase);
      });
      setAllData({
         mens: [dataMens, setDataMens],
         womens: [dataWomens, setDataWomens],
         userdata: [user, setUser],
         mobile: [dataMobile, setDataMobile],
         cart: [dataCart, setDataCart],
         wish: [dataWishlist, setDataWishlist]
      })

   }, [setDataMens, setDataWomens, setDataCart, setDataWishlist, user])


   const deleteItem = async (id, e) => {
      await database.collection('users').doc(user).collection('cart').doc(id).delete().then(() => {
         toast("Product Deleted", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         })
      })
   }

   return (
      <StateContext.Provider
         value={{

            mens: [dataMens, setDataMens],
            womens: [dataWomens, setDataWomens],
            userdata: [user, setUser],
            mobile: [dataMobile, setDataMobile],
            cart: [dataCart, setDataCart],
            wish: [dataWishlist, setDataWishlist]
         }
         }
      >
         {props.children}
      </StateContext.Provider >
   )
}