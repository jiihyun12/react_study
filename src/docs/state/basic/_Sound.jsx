import React, { useState } from 'react';

const _Sound = () => {
    const [sound, setSound] = useState("");
    const catSound = () => {
        setSound("아옹")
    }

    const dogSound = () => {
        setSound("멍멍")
    }



    return (
        <div>
            <p>{sound}</p>
            <button onClick={catSound}> 고양이 </button>
            <button onClick={dogSound}> 강아지 </button>
        </div>
    );
};

export default _Sound;