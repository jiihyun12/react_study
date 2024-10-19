// FoodContainer에서 Foods로 값을 넘겨서 Foods에서 반복을 돌려서 Food를 뿌리기

import React from 'react';
import Food from './Food';

const Foods = ({foods, style}) => {
    return (
        <div>
            {foods.map((food,i) => <Food key={i} food={food} style={style} />)}
        </div>
    );
};

export default Foods;