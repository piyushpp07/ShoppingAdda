import React, { useState, useEffect, createContext } from 'react'
import { auth, database } from '../firebase';
export const StateContext = createContext();

export const StateProvider = (props) => {
   const [user, setUser] = useState()
   const [cartTotal, setcartTotal] = useState()
   const [cartSave, setcartSave] = useState()
   const [wishTotal, setWishTotal] = useState()
   const [wishSave, setWishSave] = useState()
   const [dataMens, setDataMens] = useState([])
   const [dataWomens, setDataWomens] = useState([])
   const [dataMobile, setDataMobile] = useState([])
   const [dataCart, setDataCart] = useState([])
   const [dataWishlist, setDataWishlist] = useState([])
   const [add, setAdd] = useState([])

   useEffect(() => {
      auth.onAuthStateChanged(usr => {
         if (usr != null)
            setUser(usr.uid)
         else
            setUser(null);
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
      if (user !== null) {
         database.collection('users').doc(user).collection('cart').onSnapshot((a) => {
            const fdata = [];
            a.forEach((item) => {
               fdata.push({ ...item.data(), key: item.id })

            })
            setDataCart(fdata)
         })

         //Wishlist Data from Firebase
         database.collection('users').doc(user).collection("wish").onSnapshot((querySnapshot) => {
            const getWishDataFromFirebase = [];
            querySnapshot.forEach((doc) => {
               getWishDataFromFirebase.push({ ...doc.data(), key: doc.id });
            });
            setDataWishlist(getWishDataFromFirebase);
         });

         database.collection('users').doc(user).collection('cart').onSnapshot((a) => {
            let total = 0;
            let save = 0;
            a.forEach((item) => {
               total = total + Number(item.data().price)
               save = save + Number(item.data().oldPrice - item.data().price)
            })
            setcartSave(save)
            setcartTotal(total)
         })
         database.collection('users').doc(user).collection('wish').onSnapshot((a) => {
            let total = 0;
            let save = 0;
            a.forEach((item) => {
               total = total + Number(item.data().price)
               save = save + Number(item.data().oldPrice - item.data().price)
            })
            setWishSave(save)
            setWishTotal(total)
         })

         //address


         const getAddress = [];
         database.collection('users').doc(user).collection('shipping').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               getAddress.push({ ...doc.data(), key: doc.id });
            });
            setAdd(getAddress);
         });
      }


   }, [user])



   return (
      <StateContext.Provider
         value={{

            mens: [dataMens, setDataMens],
            womens: [dataWomens, setDataWomens],
            userdata: [user, setUser],
            mobile: [dataMobile, setDataMobile],
            cart: [dataCart, setDataCart],
            wish: [dataWishlist, setDataWishlist],
            cartsave: [cartSave, setcartSave],
            carttotal: [cartTotal, setcartTotal],
            wishsave: [wishSave, setWishSave],
            wishtotal: [wishTotal, setWishTotal],
            addr: [add, setAdd]
         }
         }
      >
         {props.children}
      </StateContext.Provider >
   )
}