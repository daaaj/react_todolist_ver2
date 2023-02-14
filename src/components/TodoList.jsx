import React from 'react';
import Button from './comon/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo, cancleTodo } from '../redux/modules/todoModule';
import * as S from '../components/styled/ShareStyle';
import { Link } from 'react-router-dom';

const TodoBox = styled(S.DivFlex)`
    max-width: 300px;
    background-color: #bad1c2;
    border-radius: 30px;
    font-size: 1.3rem;
    // 줄바꿈...까먹지말자
    word-break: break-all;

    /* Link 는 a로 수정해주기~ */
    > a {
        text-decoration: none;
        color: black;
        font-size: 0.9rem;
        margin-top: 20px;
    }
`;

const Title = styled.span`
    font-size: 1.9rem;
    margin: 20px;
`;

const Content = styled.p`
    font-size: 1.1rem;
    margin: 0px 20px 50px 20px;
`;
const BtnArea = styled(S.DivFlex)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    > button {
        width: 100px;
        height: 40px;
        font-size: 1rem;
        margin: 5px;
        margin-bottom: 40px;
    }
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
            <Title>{list.title}</Title>
            <Content>{list.content}</Content>
            <BtnArea>
                {list.isDone === false
                    ? btnNames
                          .filter((item) => item !== '취소')
                          .map((item, i) => {
                              return <Button key={i} name={item} color={i === 0 ? '' : '#4FA095'} onClick={i === 0 ? deleteTodoList : doneTodoList} />;
                          })
                    : btnNames
                          .filter((item) => item !== '완료')
                          .map((item, i) => {
                              return <Button key={i} name={item} color={item === '삭제하기' ? '' : '#4FA095'} onClick={i === 0 ? deleteTodoList : cancleTodoLIst} />;
                          })}
            </BtnArea>
        </TodoBox>
    );
}
export default TodoList;
