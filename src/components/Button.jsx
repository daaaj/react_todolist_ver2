import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    font-family: 'UhBeeKang-Ja';
    border: none;
    border-radius: 20px;
    background-color: ${(props) => props.color};
`;
function Button({ onClick, name, color }) {
    return (
        <Btn onClick={onClick} color={color}>
            {name}
        </Btn>
    );
}
export default Button;
