import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/modules/todoModule';

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
    // 삭제하기, 완료 버튼은 여기 있으니깐 여기서..??

    // 1. selector 안해도 되는지...?
    // 2. dispatch
    const dispatch = useDispatch();

    const deleteTodoList = () => {
        dispatch(deleteTodo(list.id));
    };
    const doneTodoList = () => {
        //console.log('완료해');
    };
    return (
        <TodoBox>
            <span>상세보기</span>
            <span>{list.title}</span>
            <p>{list.content}</p>
            <div>
                {btnNames.map((item, i) => {
                    return <Button key={i} name={item} onClick={i === 0 ? deleteTodoList : doneTodoList} />;
                })}
                {/* <Button name={'삭제하기'} onClick={deleteTodoList} /> */}
            </div>
        </TodoBox>
    );
}
export default TodoList;
