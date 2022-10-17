import s from "../scss/modules/service.module.scss"
import React from "react";
import {ICardService} from "../types/components";

const CardService: React.FC<ICardService> = ({title, text}) => {
    return (
        <li className={s.service__card}>
            <h4 className={s.service__cardTitle}>{title}</h4>
            <p className={s.service__cardText}>{text}</p>
        </li>
    )
}

export default CardService;