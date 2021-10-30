import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { database } from '../../firebase'
import ItemCards from '../itemCard'
import { Col, Container, Row } from 'react-bootstrap'
const Search = () => {
   const [data, setData] = useState([]);
   const useQuery = () => {
      return new URLSearchParams(useLocation().search)
   }
   let query = useQuery();
   let search = query.get("name");
   console.log(search)
   useEffect(() => {
      searchData();
   }, [search])
   const searchData = async () => {
      let cm = await database.collection('collection').doc('mens')
      cm.collection('MensAttire').where("productName", "==", search).get().then((querySnapshot) => {
         const fdata = [];
         querySnapshot.forEach((item) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(" => ", item.data());
            fdata.push({ ...item.data(), key: item.id })
         });
         if (fdata.length !== 0) {
            setData(fdata);
         }

      }).catch(setData([]))

      let cw = await database.collection('collection').doc('women')
      cw.collection('WomenAttire').where("productName", "==", search).get().then((querySnapshot) => {
         const fdata = [];
         querySnapshot.forEach((item) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(" => ", item.data());
            fdata.push({ ...item.data(), key: item.id })
         });
         console.log(fdata)
         if (fdata.length !== 0) { setData(fdata); }

      })

   }
   return (
      < Container style={{ alignContent: 'center' }}>
         <h3 style={{ alignSelf: 'center' }}>Search Results</h3>
         <Row fixed>

            {data && data.map((doc) =>
               <Col xs={5} md={4}>
                  <ItemCards
                     key={doc.id}
                     id={doc.id}
                     productName={doc.productName}
                     image={doc.image}
                     price={doc.price}
                     oldPrice={doc.oldPrice}
                  />

               </Col>
            )}
            {data.length !== 0 ? (<></>) : (<h2>Eh ! Keyword Error......</h2>)}
         </Row>
      </Container>
   )
}

export default Search
