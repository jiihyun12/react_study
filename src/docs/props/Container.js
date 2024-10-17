import React from 'react';
import Component02 from './Component02';
// import Component from './Component';

const Container = () => {
    const name = "함지현";
    const age = 20;
    const printName = (name) => {
        console.log(name)
    };

    return (
        <div>
            {/* <Component name={name} age={age} /> */}
            <Component02 printName={printName}>
                <span>회원입니다.</span>
            </Component02>
        </div>
    );
};

export default Container;