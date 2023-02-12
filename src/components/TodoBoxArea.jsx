import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import styled from 'styled-components';

// working + todobox 전체 영역
const Label_box_area = styled.div`
    background-color: crimson;
`;
const WorkingArea = styled.div`
    // 굳이 나눌 필요 없지?
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //background-color: lightcoral;
`;

function TodoBoxArea() {
    // 리듀서 여기서 새로 만들기??
    // 아니면 쓰이는 곳에서는 새로 만드는 건가요?
    const todoReducer = useSelector((state) => state.todoReducer);
    return (
        <Label_box_area>
            <label>Working</label>
            <WorkingArea>
                {todoReducer.map((list) => {
                    return <TodoList key={list.id} list={list} />;
                })}
            </WorkingArea>
        </Label_box_area>
    );
}

export default TodoBoxArea;
