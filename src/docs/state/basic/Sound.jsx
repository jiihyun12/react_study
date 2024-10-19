// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 울음 소리가 나오도록 구현하기

import { useState } from "react";


const Sound = () => {

    const [sound, setSound] = useState("sound");
    const catSound = () => {
        setSound("야옹")
    }
    const dogSound = () => {
        setSound("멍멍")
    }

    console.log(setSound)

    return (
        <div>
            <p>{sound}</p>
            <button onClick={dogSound}>강아지 버튼</button>
            <button onClick={catSound}>고양이 버튼</button>
        </div>
    );
};

export default Sound;