import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo, cancleTodo } from '../redux/modules/todoModule';
import * as S from '../components/styled/ShareStyle';

const TodoBox = styled(S.DivFlex)`
    width: 200px;
    height: 200px;
    background-color: lightgreen;
`;

function TodoList({ list }) {
    // 삭제하기, 완료 버튼은 여기 있으니깐 여기서..??

    // 1. selector 안해도 되는지...?
    // 2. dispatch
    const dispatch = useDispatch();

    const deleteTodoList = () => {
        dispatch(deleteTodo(list.id));
    };
    const doneTodoList = () => {
        dispatch(doneTodo(list.id));
    };
    const cancleTodoLIst = () => {
        dispatch(cancleTodo(list.id));
    };
    const btnNames = ['삭제하기', '완료', '취소'];
    return (
        <TodoBox>
            <span>상세보기</span>
            <span>{list.title}</span>
            <p>{list.content}</p>
            <div>
                {list.isDone === false
                    ? btnNames
                          .filter((item) => item !== '취소')
                          .map((item, i) => {
                              return <Button key={i} name={item} onClick={i === 0 ? deleteTodoList : doneTodoList} />;
                          })
                    : btnNames
                          .filter((item) => item !== '완료')
                          .map((item, i) => {
                              return <Button key={i} name={item} onClick={i === 0 ? deleteTodoList : cancleTodoLIst} />;
                          })}
            </div>
        </TodoBox>
    );
}
export default TodoList;
