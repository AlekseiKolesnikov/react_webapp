import {Location} from "react-router-dom";
import {useEffect, useState} from "react";


const UseAnimTransition = (action: string, location: Location) => {
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState(action);


    useEffect((): void => {
        if (location !== displayLocation) {
            setTransitionStage('fadeOut');
        }
    }, [location, displayLocation])


    const onAnimationEnd = () => {
        if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
        }
    }

    return {
        onAnimationEnd,
        displayLocation
    }
};

export default UseAnimTransition;