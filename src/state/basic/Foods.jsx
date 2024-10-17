import React from 'react';
import Food from '../../docs/map/basic/Food';

const Foods = ({foods, style}) => {
    return (
        <div>
            {foods.map((food)=><Food key={i} food={food} style={style} /> )}
        </div>
    );
};

export default Foods;