import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    font-family: 'UhBeeKang-Ja';
    border: none;
    outline: 3px solid #4fa095;
    font-size: 1.2rem;
`;

// title, content input
function Input({ value, onChange }) {
    return <InputText value={value} onChange={onChange} />;
}

export default Input;
