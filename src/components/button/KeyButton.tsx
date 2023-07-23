import React from 'react';

interface Button {
    onCLick: any
    text: string
}

export function KeyButton(props: Button) {
    return (
        <div className={"button_container _container"}>
            <button onClick={props.onCLick}
                    className={"button_container_button"}
            >{props.text}</button>
        </div>
    )
}
