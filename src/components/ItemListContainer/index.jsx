import React, {useState, useEffect} from "react";

import ItemCount from "../ItemCount";
import Title from "../Title";
import ItemList from "../ItemList/itemList";

const food = [
    {id: 1, image:"https://okdiario.com/img/2021/12/09/hamburguesas-caseras-rellenas-de-queso-cheddar.jpg", title: "Hamburgesa"},
    {id: 2, image:"https://www.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-c.jpg", title: "Pizza"},
    {id: 3, image:"https://www.lavoz.com.ar/resizer/YvfIiUjUnyCde-CJG5hZ4e5aTMo=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/C5QFOUIRIFHTLCWCDVYQPLKIHI.jpeg", title: "Empanada"},

];


const ItemListContainer = ({ texto }) => {

    const [data,setData]= useState([]);

    useEffect (() => {
        const getData = new Promise (resolve=>{
            setTimeout(() => {
                resolve(food);
            }, 2000)
        });
        getData.then(res => setData(res));

    }, [])


    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer