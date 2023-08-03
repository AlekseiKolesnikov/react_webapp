import React, {useEffect, useState} from 'react';
import Button from "../../components/ui/Button";
import {useLocation, useNavigate} from "react-router-dom";
import useRenderTransition from "../../hooks/transition";

const HangmanLevels = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const renderTransition = useRenderTransition('fadeIn', location);
    const [level, setLevel] = useState('');

    useEffect(() => {
        if (level !== '') {
            navigation(`/loader/${level}}`)
        }
    }, [level]);

    return (
        <div style={{height: '30vh'}}
             className={`_buttons_flex_container ${renderTransition}`}>
            <Button
                onClick={() => {
                    setLevel('hard');
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