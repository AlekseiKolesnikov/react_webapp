import {useLocation, useNavigate} from 'react-router-dom';
import ButtonComponent from "../UI/ButtonComponent/ButtonComponent";
import '../../styles/transition_animation/transition_animation.scss';
import {useEffect, useRef} from "react";

const GameChoiceButtonsComponent = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const renderTransition = useRef('fadeIn')

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])

    return (
        <div className={`choose_game _buttons_flex_container ${renderTransition.current}`}>
            <ButtonComponent
                onClick={() => {
                    navigation('/memory_levels');
                }}
            >Мемори</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    navigation('/hangman_levels');
                }}
            >Виселица</ButtonComponent>
        </div>
    )
}

export default GameChoiceButtonsComponent;