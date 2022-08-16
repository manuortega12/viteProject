import React from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const food = [
    {id: 1, price: 800, image:"https://okdiario.com/img/2021/12/09/hamburguesas-caseras-rellenas-de-queso-cheddar.jpg", category: "menu", title: "Hamburgesa"},
    {id: 2, price: 1000, image:"https://www.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-c.jpg", category: 'menu', title: "Pizza"},
    {id: 3, price: 1200, image:"https://www.lavoz.com.ar/resizer/YvfIiUjUnyCde-CJG5hZ4e5aTMo=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/C5QFOUIRIFHTLCWCDVYQPLKIHI.jpeg", category: 'menu', title: "Empanada"},
    {id: 4, price: 500, image:"https://scm-assets.constant.co/scm/unilever/2bb5223be0548fcc55c230aa5f951219/84b57886-fee2-4f98-8920-027f8afd654c.png", category: 'guarnicion', title: "Porcion de fritas"},
    {id: 5, price: 600, image:"https://irecetasfaciles.com/wp-content/uploads/2019/05/papas-francesas-con-tocineta-y-salsa-de-queso.png", category: 'guarnicion', title: "Papas fritas con bacon y cheddar"}
    ];


export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const { detalleId } = useParams();

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve(food);
            }, 2000);
        });
        getData.then(res => setData(res.find(foods => foods.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer