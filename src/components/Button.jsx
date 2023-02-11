import React from 'react';

function Button({ onClick, name }) {
    return <button onClick={onClick}>{name}</button>;
}

export default Button;
