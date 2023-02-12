import React from 'react';
import styled from 'styled-components';
import TodoBoxArea from './TodoBoxArea';
import * as S from '../components/styled/ShareStyle';

// 스타일 components
const Section = styled(S.DivFlex.withComponent('section'))`
    background-color: aqua;
    display: inline;
`;

function ContentArea({ todoReducer }) {
    return (
        <Section>
            <TodoBoxArea></TodoBoxArea>
            <label>Done</label>
            <div>
                <div>카드</div>
            </div>
        </Section>
    );
}

export default ContentArea;
