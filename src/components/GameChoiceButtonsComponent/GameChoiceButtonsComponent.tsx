import React, {useEffect, useTransition} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import ButtonComponent from "../UI/ButtonComponent/ButtonComponent";

const GameChoiceButtonsComponent = () => {
    const [isPending, startTransition] = useTransition();
    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {

    }, [location])

    return (
            <div style={{height: '20vh'}} className={"_buttons_flex_container"}>
            <ButtonComponent
                style={{height: '70%'}}
                onClick={() => {
                navigation('/');
            }}
            >Мемори</ButtonComponent>

            <ButtonComponent
                style={{height: '70%'}}
                onClick={() => {
                navigation('/hangman_levels');
            }}
            >Виселица</ButtonComponent>
        </div>
    )
}

export default GameChoiceButtonsComponent;