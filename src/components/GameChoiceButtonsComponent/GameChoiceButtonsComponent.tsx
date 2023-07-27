import {Routes, useLocation, useNavigate} from 'react-router-dom';
import ButtonComponent from "../UI/ButtonComponent/ButtonComponent";
import '../../styles/transition_animation/transition_animation.scss';
import useAnimTransition from "../../hooks/useAnimTransition";

const GameChoiceButtonsComponent = () => {
    let action = 'fadeIn';
    const navigation = useNavigate();
    const location = useLocation();
    const animation = useAnimTransition(action, location);

    return (
        <div className={`choose_game _buttons_flex_container ${action}`}
             onAnimationEnd={() => {
                 animation.onAnimationEnd()
             }}>
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
            <Routes location={animation.displayLocation}/>
        </div>
    )
}

export default GameChoiceButtonsComponent;