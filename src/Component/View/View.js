import React from 'react';

const View = (props) => {
    const company = props.employ;
    console.log('kaj hobe',);
    return (
        <div>
            <h1>i am back: {company}</h1>
        </div>
    );
};

export default View;