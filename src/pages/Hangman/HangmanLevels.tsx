import React, {useEffect, useRef, useState} from 'react';
import Button from "../../components/ui/Button";
import {useLocation, useNavigate} from "react-router-dom";
import useSwitch from "../../hooks/useSwitch";

const HangmanLevels = () => {
    const location = useLocation();
    const [context, setContext] = useSwitch();
    const navigation = useNavigate();
    const renderTransition = useRef('fadeIn');
    const [level, setLevel] = useState('');
    const increment = () => setContext((context: boolean) => !context);

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])


    useEffect(() => {
        if (level !== '') {
            navigation(`/loader/${level}}`)
        }
    }, [level]);

    return (
        <div style={{height: '30vh'}}
             className={`_buttons_flex_container ${renderTransition.current}`}>
            <Button
                onClick={() => {
                    setLevel('hard');
                    increment()
                }}
            >Сложный Уровень</Button>

            <Button
                onClick={() => setLevel('medium')}
            >Средний Уровень</Button>

            <Button
                onClick={() => setLevel('easy')}
            >Лёгкий Уровень</Button>
        </div>
    )
}

export default HangmanLevels;