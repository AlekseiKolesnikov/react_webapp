import React from 'react';
import {useParams} from "react-router-dom";

const Loader = () => {

    return (
        <div className={"loader_container"}>
            <div className={"loader_container_text"}></div>
            <div className={"loader_container_line"}></div>
        </div>
    );
};

export default Loader;