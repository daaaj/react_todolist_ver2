import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// store 연결
import { Provider } from 'react-redux';
import store from './redux/config/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // store 연결
    <Provider store={store}>
        <App />
    </Provider>
);
