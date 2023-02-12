import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import * as S from '../components/styled/ShareStyle';
import { Link } from 'react-router-dom';

const GlobalStyle = S.GlobalStyle;

const Area = styled(S.DivFlex)`
    height: 100vh;
`;
const TodoBox = styled(S.DivFlex)`
    border: 10px solid #f6f6c9;
    border-radius: 30px;
    max-width: 400px;
    min-height: 500px;

    justify-content: space-between;
`;
const TopArea = styled(S.DivFlex)`
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 0px;
    height: 20%;

    > span {
        margin-left: 30px;
        font-size: 1.1rem;
    }

    > a {
        margin-right: 30px;

        > button {
            width: 80px;
            height: 35px;
            font-size: 1rem;
        }
    }
`;

const ContentArea = styled(S.DivFlex)`
    height: 80%;

    > span {
        font-size: 2.5rem;
        height: 30%;
    }
    > p {
        font-size: 1.5rem;
        height: 70%;
    }
`;

function TodoPage() {
    // 리스트 가져오기 = 리듀서
    const todoReducer = useSelector((state) => state.todoReducer);

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
                    <TopArea>
                        <span>id : {findTodo.id}</span>
                        {/* Link 사용 */}
                        <Link to={`/`}>
                            <Button name={'이전으로'}></Button>
                        </Link>
                    </TopArea>
                    <ContentArea>
                        <span>{findTodo.title}</span>
                        <p>{findTodo.content}</p>
                    </ContentArea>
                </TodoBox>
            </Area>
        </>
    );
}
export default TodoPage;
