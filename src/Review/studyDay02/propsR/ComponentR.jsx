// container에서 이름과 나이 출력하기

import React from 'react';

const ComponentR = (props) => {
    console.log(props)
    return (
        <div>
            
            {props.name}
            {props.age}
        </div>
    );
};

export default ComponentR;