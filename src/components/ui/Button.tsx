import React, {ReactNode} from 'react';
import '../../styles/Button.scss';

interface Button {
    children: ReactNode,
    onClick: () => void
}

const Button = ({children, ...props}: Button) => {

    return (
        <div className={"button_container _button_container"}>
            <button
                {...props}
                className={"button_container_button "}>
                {children}
            </button>
        </div>
    )
}

export default Button;