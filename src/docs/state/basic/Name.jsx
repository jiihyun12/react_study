import React, { useState } from 'react';

const Name = () => {
    const [result, setResult] = useState();

    const onChangeToInputValue = (e) => {
        setResult(e.target.value);
    }

    return (
        <div>
            <p>{result}</p>
            <input type='text' onChange={onChangeToInputValue}/>
        </div>
    );
};

export default Name;