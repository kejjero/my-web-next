import s from "../scss/modules/Button.module.scss"
import {IButton} from "../types/components";
import React from "react";

const Button: React.FC<IButton> = ({fill = false, children, width}) => {
    const buttonStyle = {
        backgroundColor: fill ?  'rgb(0, 0, 0)' : 'inherit', color: fill ? '#fff' : '#000',
        minWidth: width ? width : 'auto'
    }
    return <button style={buttonStyle} className={s.button}>{children}</button>
}

export default Button;