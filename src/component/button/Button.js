import React from 'react';
import './Button.css';

const buttons = React.memo((props) => (
    <button className='button' onClick={props.clicked}>
        {props.children}
    </button>
));

export default buttons;
