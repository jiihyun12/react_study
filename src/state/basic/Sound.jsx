import React, { useState } from 'react';

const Sound = () => {

    // 버튼을 눌렀을 떄 각각 울음소리가 나오도록
    const [sound, setSound ] = useState("default");
    const catSound = ( ) => { setSound("멍멍")}
    const dogSound = ( ) => { setSound("야옹")}
    

    return (
        <div>
            <p>{sound}</p>
            <button onClick={catSound}>강아지 버튼</button> 
            <button onCllick={dogSound}>고양이 버튼</button>
        </div>
    );
};

export default Sound;