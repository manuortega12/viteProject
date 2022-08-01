
import React from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const food = [
{id: 1, image:"https://okdiario.com/img/2021/12/09/hamburguesas-caseras-rellenas-de-queso-cheddar.jpg", title: "Hamburgesa", precio: "$800",desc: "Hamburesa con dos medallones de carne, incluye de papas fritas", category: "menu"},
{id: 2, image:"https://www.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-c.jpg", title: "Pizza",precio:"$1000", desc:"Pizza especial, mozzarella, jamón cocido y morrones", category: 'menu'},
{id: 3, image:"https://www.lavoz.com.ar/resizer/YvfIiUjUnyCde-CJG5hZ4e5aTMo=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/C5QFOUIRIFHTLCWCDVYQPLKIHI.jpeg", title: "Empanada", precio: "$1200 la docena", desc: "Empanadas criollas fritas", category: 'menu'},
{id: 4, image:"https://scm-assets.constant.co/scm/unilever/2bb5223be0548fcc55c230aa5f951219/84b57886-fee2-4f98-8920-027f8afd654c.png", title: "Porcion de fritas", precio: "$500", desc:"Porcion de papas fritas", category: 'guarnicion'},
{id: 5, image:"https://irecetasfaciles.com/wp-content/uploads/2019/05/papas-francesas-con-tocineta-y-salsa-de-queso.png", title: "Porcion de fritas con bacon y cheddar", precio: "$600", desc: "Porcion de papas fritas con bacon y cheddar", category: 'guarnicion'}
]


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