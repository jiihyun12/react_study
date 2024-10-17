import React from 'react';

const Component02 = (props) => {
    console.log(props)
    props.printName("함지현");
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Component02;