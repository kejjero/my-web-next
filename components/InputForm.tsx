import s from "../scss/modules/contacts.module.scss"
import React from "react";

const InputForm: React.FC<any> = ({type, placeholder, title}) => {
    return(
        <div className={s.contacts__inputWrapper}  >
            <span className={s.contacts__inputSpan}>{title}</span>
            <input
                className={s.contacts__input}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputForm;