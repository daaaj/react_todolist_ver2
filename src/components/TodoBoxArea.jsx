import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import styled from 'styled-components';

// working + todobox 전체 영역
const Label_box_area = styled.div`
    background-color: crimson;
`;
const WorkingArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //background-color: lightcoral;
`;

function TodoBoxArea() {
    // 값 뿌려주는 곳에는 selector 사용 ~~!!
    const todoReducer = useSelector((state) => state.todoReducer);

    const labelText = ['Working..', 'Done..'];

    return (
        <Label_box_area>
            {labelText.map((text, i) => (
                <div key={i}>
                    <label>{text}</label>
                    {i === 0 ? (
                        <WorkingArea>
                            {todoReducer
                                .filter((list) => list.isDone === false)
                                .map((list) => {
                                    return <TodoList key={list.id} list={list} />;
                                })}
                        </WorkingArea>
                    ) : (
                        <WorkingArea>
                            {todoReducer
                                .filter((list) => list.isDone === true)
                                .map((list) => {
                                    return <TodoList key={list.id} list={list} />;
                                })}
                        </WorkingArea>
                    )}
                </div>
            ))}
        </Label_box_area>
    );
}

export default TodoBoxArea;
