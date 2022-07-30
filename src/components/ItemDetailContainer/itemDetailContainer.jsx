
import React from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import { useEffect, useState } from 'react';

const food = {id: 1, image:"https://okdiario.com/img/2021/12/09/hamburguesas-caseras-rellenas-de-queso-cheddar.jpg", title: "Hamburgesa", precio: "$600", desc: "Hamburesa con de un medallón de carne, incluye porcion de papas fritas"}

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve(food);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer