import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo, cancleTodo } from '../redux/modules/todoModule';
import * as S from '../components/styled/ShareStyle';
import { Link } from 'react-router-dom';

const TodoBox = styled(S.DivFlex)`
    width: 200px;
    height: 200px;
    background-color: lightgreen;
`;

function TodoList({ list }) {
    // 1. selector 안해도 되는지...? ㅇㅇ
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
        // 1. 상세보기 클릭 시 상세 페이지 이동 => Link 사용 (백틱 사용!!)
        // 2. 해당 id 조회해서 todo 가지고 오기 => 상세페이지에서 useParam 이용
        // 3. 이전으로 버튼 클릭시 home page로 이동 => Link 사용
        <TodoBox>
            <Link to={`/${list.id}`}>
                <span>상세보기</span>
            </Link>
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
