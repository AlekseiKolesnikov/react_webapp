import React from "react";
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <MemoryRouter initialEntries={['/games']}>
            <App/>
        </MemoryRouter>
    </Provider>
);

