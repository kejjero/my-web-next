import s from "../scss/modules/service.module.scss"
import React from "react";
import {ICardService} from "../types/components";

const CardService: React.FC<ICardService> = ({title, text}) => {
    return (
        <li className={s.service__card}>
            {title}
            {text}
        </li>
    )
}

export default CardService;