import { useState, useEffect } from "react";
import { database } from '../firebase'

function GetDataW() {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const getDataFromFirebase = [];
        const subscriber = database.
            collection('collection').
            doc("women").
            collection("WomenAttire").
            onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getDataFromFirebase.push({ ...doc.data(), key: doc.id });
                });
                setDocs(getDataFromFirebase);
            });
        return () => subscriber();
    }, [])

    return { docs };
}
export default GetDataW;