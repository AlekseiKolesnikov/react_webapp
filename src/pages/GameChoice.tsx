import {useLocation, useNavigate} from 'react-router-dom';
import Button from "../components/ui/Button";
import '../styles/Transition.scss';
import {useEffect, useRef} from "react";

const GameChoice = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const renderTransition = useRef('fadeIn')

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])

    return (
        <div className={`choose_game _buttons_flex_container ${renderTransition.current}`}>
            <Button
                onClick={() => {
                    navigation('/memory_levels');
                }}
            >Мемори</Button>

            <Button
                onClick={() => {
                    navigation('/hangman_levels');
                }}
            >Виселица</Button>
        </div>
    )
}

export default GameChoice;