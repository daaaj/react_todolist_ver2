// 이벤트 핸들러 같은 함수들은 다 모듈에다!!

// value
const ADD = 'todo/ADD';
const DELETE = 'todo/DELETE';
const DONE = 'todo/DONE';
const CANCLE = 'todo/CANCLE';

// creator
export const addTodo = (title, content) => {
    return {
        type: ADD,
        title,
        content,
    };
};

// list 초기값 줘보자
const initalState = [
    {
        id: 1,
        title: '까꿍',
        content: '하하하',
        isDone: false,
    },
];

// reducer : 가공하는 공장...9ㅅ9
// 값 넘어온건 action.@ 으로...
const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    content: action.content,
                    isDone: false,
                },
            ];
        default:
            return state;
    }
};
export default todoReducer;
