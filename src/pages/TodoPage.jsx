import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import * as S from '../components/styled/ShareStyle';
import { backPage } from '../redux/modules/todoModule';

const GlobalStyle = S.GlobalStyle;

const Area = styled(S.DivFlex)`
    background-color: lightsalmon;

    height: 100vh;
`;

const TodoBox = styled(S.DivFlex)`
    background-color: lightblue;
    max-width: 600px;
    min-height: 700px;
`;

function TodoPage() {
    // 리스트 가져오기 = 리듀서
    const todoReducer = useSelector((state) => state.todoReducer);

    // 값 던지기~~
    const dispatch = useDispatch();

    const backBtn = () => {
        dispatch(backPage());
    };

    // 파라미터에서 id값 가져오기
    const param = useParams();

    // find API 사용 => 리스트를 가져와야함 = selector로 가져온거 사용
    const findTodo = todoReducer.find((todo) => {
        return todo.id === parseInt(param.id);
    });

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Area>
                <TodoBox>
                    <div>
                        <span>id : {findTodo.id}</span>
                        <Button name={'이전으로'} onClick={backBtn}></Button>
                    </div>
                    <div>
                        <span>{findTodo.title}</span>
                        <p>{findTodo.content}</p>
                    </div>
                </TodoBox>
            </Area>
        </>
    );
}

export default TodoPage;
