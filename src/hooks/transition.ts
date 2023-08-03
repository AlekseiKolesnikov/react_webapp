import {useEffect, useRef} from 'react';
import {Location} from "react-router-dom";

const useRenderTransition = (value: string, location: Location): string => {
    const renderTransition = useRef(value);

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])

    return renderTransition.current = value;
};

export default useRenderTransition;