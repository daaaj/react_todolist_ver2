import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 이안에 route가 여러개 들어감 */}
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
