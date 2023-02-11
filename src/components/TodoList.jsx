import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const TodoBox = styled.div`
    width: 200px;
    height: 200px;
    background-color: lightgreen;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const btnNames = ['삭제하기', '완료'];

function TodoList({ list }) {
    return (
        <TodoBox>
            <span>상세보기</span>
            <span>{list.title}</span>
            <p>{list.content}</p>
            <div>
                {btnNames.map((item, i) => {
                    return <Button key={i} name={item} />;
                })}
            </div>
        </TodoBox>
    );
}
export default TodoList;
