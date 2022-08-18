import React, {useState, useEffect} from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Title from "../Title";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ texto }) => {

    const [data,setData]= useState([]);

    const { comidaId } = useParams();

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');

  
        if (comidaId) {
            const queryFilter = query(queryCollection, where('category', '==', comidaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
 
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))

        }
    }, [comidaId])

    return (
        <>
            <Title greeting={texto}/>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer