import React from 'react';
import './../../styles/Loader.scss';

const Loader = () => {
    return (
        <div className={"loader_container"}>
            <span className={"loader_container_text"}>Загрузка</span>
            <span className={"loader_container_line"}></span>
        </div>
    );
};

export default Loader;