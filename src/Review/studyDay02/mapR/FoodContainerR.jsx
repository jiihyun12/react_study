import React from 'react';
import FoodsR from '../../studyDay02/mapR/FoodsR';

const FoodContainerR = () => {
    const foods = [
        { id : 1, name : "치킨" },
        { id : 2, name : "피자" },
        { id : 3, name : "떡볶이" },
        { id : 4, name : "곱창" },
        { id : 5, name : "닭발" },
    ]
    const style = {
        color : "blue"
    }
    
    return (
        <ul>
           < FoodsR foods={foods} style={style} />
        </ul>
    );
};

export default FoodContainerR;