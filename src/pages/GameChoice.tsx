import {useLocation, useNavigate} from 'react-router-dom';
import Button from "../components/ui/Button";
import '../styles/Transition.scss';
import {useGetWordQuery} from "../store/random_word/random_word_api";
import useRenderTransition from "../hooks/transition";

const GameChoice = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const renderTransition = useRenderTransition('fadeIn', location);
    const {isLoading, isError, data} = useGetWordQuery([]);
    console.log(data)

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