import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import styled from 'styled-components';

// working + todobox 전체 영역
const LabelBoxArea = styled.div`
    border: 10px solid #f6f6c9;
    min-height: 800px;
    border-radius: 30px;
    height: 100%;
    padding: 30px 0px;
`;
const DoDoneArea = styled.div`
    margin: 0px 20px;

    > label {
        font-size: 2rem;
        padding: 20px;
        display: block;
        margin-bottom: 10px;
    }
`;
const GridArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 20px;
    margin-bottom: 20px;
`;

function TodoBoxArea() {
    // 값 뿌려주는 곳에는 selector 사용 ~~!!
    const todoReducer = useSelector((state) => state.todoReducer);

    const labelText = ['해야지..😞', '했네..😉'];

    return (
        <LabelBoxArea>
            {labelText.map((text, i) => (
                <DoDoneArea key={i}>
                    <label>{text}</label>
                    {i === 0 ? (
                        <GridArea>
                            {todoReducer
                                .filter((list) => list.isDone === false)
                                .map((list) => {
                                    return <TodoList key={list.id} list={list} />;
                                })}
                        </GridArea>
                    ) : (
                        <GridArea>
                            {todoReducer
                                .filter((list) => list.isDone === true)
                                .map((list) => {
                                    return <TodoList key={list.id} list={list} />;
                                })}
                        </GridArea>
                    )}
                </DoDoneArea>
            ))}
        </LabelBoxArea>
    );
}
export default TodoBoxArea;
