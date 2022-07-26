import Item from "../Item/item";
import React from "react";

const ItemList =({ data= [] }) => {

    return(
        data.map(food => <Item key={food.id} info= {food}/>)
   );
}

export default ItemList;