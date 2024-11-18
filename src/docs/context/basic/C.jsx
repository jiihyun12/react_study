// Props의 Drilling

import React from 'react';
import CharContext from './CharContext';

const C = () => {
    return (

        // Context를 가져와서 사용한다. 사용하는거니까 Consumer
        <CharContext.Consumer>

            {/* value를 가져오기 위해서 객체를 써야한다.
                객체를 쓰기 위해서는 연산을 해야한다.
                연산을 하기 위해서는 중괄호를 열어야한다. 
                
                연산을 하기 위해 앞에 있는 결과값을 받는다.
                앞에 있는 결과값은 context값
                return할 때 돔이 하나여야하므로 태그 하나로 받는다. 
                해당 요소의 context값을 받았으므로
                context값에 들어가있는 값에 접근한다. */}
            {/* { (context) => {
                return <p style={{color: context.color}}>Context API</p>
            }} */}
            { (context) => 
               <p style={{color: context.color}}>Context API🙄</p>
            
            }
        </CharContext.Consumer>
    );
};

export default C;