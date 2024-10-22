import React from 'react';
import Component02R from './Component02R';

const Container = () => {
    { /* name을 받으면 name을 콘솔에 출력해주는 함수 생성 */ }
    const printName = (name) => {
        console.log(name)
    };

    return (
        <div>
            <Component02R printName={printName}> { /* 사용할 수 있도록 넘겨준다. */}
                <span>회원입니다.</span>
            </Component02R>
        </div>
    );
};

export default Container;