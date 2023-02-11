import React from 'react';

// title, content input
function Input({ value, onChange }) {
    return <input value={value} onChange={onChange} />;
}

export default Input;
