import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TodoPage from '../pages/TodoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 이안에 route가 여러개 들어감 */}
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<TodoPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
