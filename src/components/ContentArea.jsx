import React from 'react';
import styled from 'styled-components';
import TodoBoxArea from './TodoBoxArea';
import * as S from '../components/styled/ShareStyle';

// 스타일 components
const Section = styled(S.DivFlex.withComponent('section'))`
    background-color: aqua;
    display: inline;
`;

function ContentArea() {
    return (
        <Section>
            <TodoBoxArea></TodoBoxArea>
        </Section>
    );
}

export default ContentArea;
