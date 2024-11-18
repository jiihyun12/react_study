// A를 감싸줄 Container

import React from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
    return (
        // CharContext로 감싼다. 제공해주는코드이므로 providor이다.
        // 하위 요소로 color나 fontSize를 여기서 쓰면 돼!하고 넘겨준다.
        <CharContext.Provider value={{color: "blue", fontSize: "30px"}}> 
            <A />
        </CharContext.Provider>
    );
};

export default CharContainer;

// 최하위요소에서 사용하기 위해 C로 이동