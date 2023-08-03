import {useEffect, useState} from 'react';

const useDepend = (value: string | undefined): string | undefined => {
    const [depend, setDepend] = useState(value);

    useEffect(() => {
        console.log(depend);
    }, [value])

    return depend;
};

export default useDepend;