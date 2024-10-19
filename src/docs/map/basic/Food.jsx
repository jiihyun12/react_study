// FoodContainer에서 li 태그를 Food 컴포넌트로 분리하기 위해 Food 파일을 생성한다.

import React from 'react';

// const Food = (props) => {
    // const {name} = props; // name을 props에서 key값으로 사용한다.
    
//  const Food = ({name}) => { 
    // 어차피 받아올 때 객체이므로 중괄호를 사용한다.
    // name을 props에서 직접 구조 분해 할당하여 사용한다.

//     return (
//         <li>
//             {name} { /*각각의 name을 li태그로 표시한다. */ }
//         </li>
//     );
// };

//-----------------------------------------------------------
const Food = ({food, style}) => { 
    return (
        <li style={style}>
            {food.name}
        </li>
    );
 };

export default Food;