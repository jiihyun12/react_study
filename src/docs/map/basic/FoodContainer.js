import React from 'react';
import Foods from './Foods';

const FoodContainer = () => {
    const foods = [
        { id : 1, name : "치킨" },
        { id : 2, name : "피자" },
        { id : 3, name : "떡볶이" },
        { id : 4, name : "곱창" },
        { id : 5, name : "닭발" },
    ]  // 음식 항목들을 포함하는 배열로, 순서가 중요하지 않기 때문에 ul 태그 내에서 li로 나열된다.


//     return (
//          <ul>
//             {/* {foods.map((food) => (
//                 <li key={food.id}>{food.name}</li> // ul 태그 내에서 각 항목을 구별하기 위해 food.id를 key로 사용한다.
//             ))} */}

//             {/* {foods.map((food,i)=> <li key={i}>{food.name}</li>)}  
//             현재 ul태그에서 index값이 중복이 안 되니까 index값으로 사용해도 무방하다. */}

//             {foods.map(({name},i)=> <Food key={i} name={name} />)} {/* name만 필요할 때 Food 컴포넌트에 전달한다. */}
//         </ul>
//     );
// };

//------------------------------------------------

    const style = {
    listStyle : "none"
    }

    return(
        <ul>
            <Foods foods={foods} style={style} />
        </ul>
    );
};

export default FoodContainer;