import React from 'react';
import styled from 'styled-components';
import TodoBoxArea from './TodoBoxArea';
import * as S from '../components/styled/ShareStyle';

const Section = styled(S.DivFlex.withComponent('section'))`
    // display:inline 속성 없애기
`;

function ContentArea() {
    return (
        <Section>
            <TodoBoxArea></TodoBoxArea>
        </Section>
    );
}

export default ContentArea;
