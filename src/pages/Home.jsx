import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todoModule';

// styled components
// 전역 global
const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin: 0;
  }
`;
// 재사용하기
const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

const Container = styled(DivFlex)`
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
`;

const Header = styled(DivFlex.withComponent('header'))`
    background-color: pink;
    height: 100px;
`;

const InputDiv = styled(DivFlex)`
    flex-direction: row;
    justify-content: space-between;

    height: 100px;
    background-color: lightgray;
`;

const Section = styled(DivFlex.withComponent('section'))`
    background-color: aqua;
    display: inline;
`;

const DivGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;
const WorkingArea = styled(DivGrid)`
    background-color: lightcoral;
`;

/*


*/

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

    // 1. useSelector 먼저
    const todoReducer = useSelector((state) => state.todoReducer);
    // 2. dispatch : 값 전달하는 따까리..
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

                <InputDiv>
                    <div>
                        <label>제목</label>
                        <Input value={title} onChange={titleChange} />
                        <label>내용</label>
                        <Input value={content} onChange={contentChange} />
                    </div>
                    <Button onClick={addTodoList} name={'추가'} />
                </InputDiv>

                {/* 얘네들 빼기 */}
                <Section>
                    <label>Working</label>
                    <WorkingArea>
                        {todoReducer.map((list) => {
                            return <TodoList key={list.id} list={list} />;
                        })}
                    </WorkingArea>
                    <label>Done</label>
                    <div>
                        <div>카드</div>
                    </div>
                </Section>
            </Container>
        </>
    );
}
export default Home;
