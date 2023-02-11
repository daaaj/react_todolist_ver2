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
export const deleteTodo = (id) => {
    return {
        type: DELETE,
        id,
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
//console.log(`list.id : ${list.id} / action.id : ${action.id}`);
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
        case DELETE:
            // 와우...() => {} 이렇게 쓰면 {} 안에 return 적어줘야 함..
            // 미쳤다리...겁나 오류찾느라 헤맸네...
            return state.filter((list) => list.id != parseInt(action.id));
        default:
            return state;
    }
};
export default todoReducer;
