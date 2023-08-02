import React, {useEffect, useRef} from 'react';
import Button from "../../components/ui/Button";
import {useLocation, useNavigate} from "react-router-dom";

const HangmanLevels = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const renderTransition = useRef('fadeIn');

    const level = {
        hard: 'hard',
        medium: 'medium',
        easy: 'easy'
    }

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])

    return (
        <div style={{height: '30vh'}}
             className={`_buttons_flex_container ${renderTransition.current}`}>
            <Button
                onClick={() => {
                    navigation(`/loader/${level.hard}`)
                }}
            >Сложный Уровень</Button>

            <Button
                onClick={() => {
                    navigation(`/loader/${level.medium}`)
                }}
            >Средний Уровень</Button>

            <Button
                onClick={() => {
                    navigation(`/loader/${level.easy}`)
                }}
            >Лёгкий Уровень</Button>
        </div>
    )
}

export default HangmanLevels;