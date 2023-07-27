import React from "react";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {MemoryRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <MemoryRouter initialEntries={['/games']}>
        <App/>
    </MemoryRouter>
);

