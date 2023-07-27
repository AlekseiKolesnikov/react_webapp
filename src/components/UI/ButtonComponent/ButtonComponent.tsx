import React, {ReactNode} from 'react';
import './ButtonComponent.scss';

interface Button {
    children: ReactNode,
    style: object
    onClick: () => void,
}

const ButtonComponent = ({children, ...props}: Button) => {

    return (
        <div className={"button_container _button_container"}
             style={{...props.style}}>
            <button
                {...props}
                className={"button_container_button "}>
                {children}
            </button>
        </div>
    )
}

export default ButtonComponent;