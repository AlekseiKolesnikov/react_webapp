import {useLocation, useNavigate} from 'react-router-dom';
import Button from "../components/ui/Button";
import '../styles/Transition.scss';
import useRenderTransition from "../hooks/useRenderTransition";

const GameChoice = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const renderTransition = useRenderTransition('fadeIn', location);

    return (
        <div style={{height: "20vh"}}
            className={`_buttons_flex_container ${renderTransition}`}>
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