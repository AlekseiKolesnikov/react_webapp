import React from 'react';

const GameContext = React.createContext(false);

const useSwitch = (): boolean => {
    return React.useContext(GameContext);
};

const GameProvider = (props: any) => {
    const [condition, setCondition] = React.useState(false);
    const value = React.useMemo(
        () => [condition, setCondition], [condition]
    );
    return (<GameContext.Provider value={value} {...props}/>);
};

export {GameProvider, useSwitch};