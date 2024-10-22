import React from 'react';
import FoodR from './FoodR'

const FoodsR = ({foods},{style}) => {
    return (
        <div>
            {foods.map((foods,i)=><FoodR key={i} foods={foods} style={style} />)}
        </div>
    );
};

export default FoodsR;