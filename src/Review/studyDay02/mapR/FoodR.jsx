import React from 'react';

const FoodR = ({foods}, {style}) => {
    return (
        <li style={style}>
            {foods.name}
        </li>
    );
};

export default FoodR;