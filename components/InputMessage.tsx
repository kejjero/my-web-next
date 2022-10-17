import s from "../scss/modules/contacts.module.scss";
import React from "react";

const InputMessage: React.FC = () => {
    return(
        <div className={s.contacts__inputWrapper}  >
            <span className={s.contacts__inputSpan}>Сообщение</span>
            <textarea
                rows={7}
                className={s.contacts__input}
                placeholder="Текст сообщения"
            />
        </div>
    )
}

export default InputMessage;