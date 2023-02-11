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

const Nav = styled(DivFlex.withComponent('nav'))`
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
    // todolist => 이런것도 모듈에서..
    /*
    const [todoList, setTodoList] = useState([
        // {
        //     id: 1,
        //     title: '까꿍',
        //     content: '하하하',
        //     isDone: false,
        // },
    ]);
    */

    // input 값
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const titleChange = (e) => {
        setTitle(e.target.value);
    };
    const contentChange = (e) => {
        setContent(e.target.value);
    };

    // add button => 이런건 모듈에서...
    // const addTodoList = () => {
    //     const newTodo = {
    //         id: Date.now(),
    //         title,
    //         content,
    //         isDone: false,
    //     };
    //     setTodoList([...todoList, newTodo]);
    // };

    // 1. useSelector 먼저
    const todoReducer = useSelector((state) => state.todoReducer);
    // 2. dispatch : 값 전달하는 따까리..
    const dispatch = useDispatch();

    // 추가 버튼 클릭시
    const addTodoList = () => {
        // 여기안에 dispatch + 모듈에서 export한 action 함수 + 넘길 값들
        dispatch(addTodo(title, content));
        // input 리셋
        setTitle('');
        setContent('');
    };

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Container>
                <Header>
                    <span>jeong todolist</span>
                </Header>
                <Nav>
                    <div>
                        <label>제목</label>
                        <Input value={title} onChange={titleChange} />
                        <label>내용</label>
                        <Input value={content} onChange={contentChange} />
                    </div>
                    {/* 버튼 클릭시 title, content list에 추가 */}
                    <Button onClick={addTodoList} name={'추가'} />
                </Nav>
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
