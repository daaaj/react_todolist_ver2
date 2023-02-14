import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/comon/Input';
import Button from '../components/comon/Button';
import ContentArea from '../components/ContentArea';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todoModule';
import * as S from '../components/styled/ShareStyle';

// styled components
const GlobalStyle = S.GlobalStyle;

const Container = styled(S.DivFlex)`
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
    margin-bottom: 100px;
`;
const Header = styled(S.DivFlex.withComponent('header'))`
    height: 100px;
    font-size: 2.5rem;
    font-weight: bold;
`;
const TopArea = styled(S.DivFlex)`
    background-color: #f6f6c9;
    flex-direction: row;
    justify-content: space-between;

    height: 100px;
    margin: 20px 0px;
    border-radius: 30px;

    > button {
        margin-right: 40px;
        width: 100px;
        height: 40px;
        font-size: 1.1rem;
        color: white;
    }
`;
const InputArea = styled(S.DivFlex)`
    flex-direction: row;
    width: auto;
    margin-left: 40px;

    /* 이렇게 안에 작성가능 */
    > label {
        font-size: 1.5rem;
        margin-right: 20px;
    }
    > input {
        height: 30px;
        width: 200px;
        margin-right: 30px;
        border-radius: 20px;

        padding: 0px 20px;
    }
`;

function Home() {
    // input 값
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const titleChange = (e) => {
        setTitle(e.target.value);
    };
    const contentChange = (e) => {
        setContent(e.target.value);
    };

    // dispatch : 값 전달하는 따까리..
    const dispatch = useDispatch();

    // 추가 버튼 클릭시
    const addTodoList = () => {
        // 여기안에 dispatch + 모듈에서 export한 action 함수 + 넘길 값들
        // input 비어있으면 버튼 안눌리게
        if (title != '' && content != '') {
            dispatch(addTodo(title, content));
            // input 리셋
            setTitle('');
            setContent('');
        }
    };

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Container>
                <Header>
                    <span>jeong todolist</span>
                </Header>
                <TopArea>
                    <InputArea>
                        <label>제목</label>
                        <Input value={title} onChange={titleChange} />
                        <label>내용</label>
                        <Input value={content} onChange={contentChange} />
                    </InputArea>
                    <Button onClick={addTodoList} name={'추가'} color={'#4FA095'} />
                </TopArea>
                <ContentArea></ContentArea>
            </Container>
        </>
    );
}
export default Home;
