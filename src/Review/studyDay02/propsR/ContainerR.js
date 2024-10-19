import React from 'react';
import Component02 from './Component02';

const Container = () => {
    { /* name을 받으면 name을 콘솔에 출력해주는 함수 생성 */ }
    const printName = (name) => {
        console.log(name)
    };

    return (
        <div>
            <Component02 printName={printName}> { /* 사용할 수 있도록 넘겨준다. */}
            </Component02>
        </div>
    );
};

export default Container;