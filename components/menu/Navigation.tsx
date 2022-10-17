import * as React from "react";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import s from "../../scss/modules/menu.module.scss"
import {useEffect, useState} from "react";

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};

export const Navigation = ({toggle, isOpen}) => {
    const [isVisible, setIsVisible] = useState(false);
    const styleDisabled = {display: 'none', overflow: 'hidden'}

    useEffect(() => {
        const timeout = (state, time) => setTimeout(() => setIsVisible(state), time)
        if (!isOpen) {
            timeout(true, 400)
        } else  {
            timeout(false, 100)
        }
        clearTimeout(timeout(false, 0))
    },[isOpen])

    console.log(isVisible)

    return (
        <div className={s.wrapperItems} style={!isVisible ? {} : styleDisabled }>
            <motion.ul variants={variants} className={s.items}>
                {items.map((item, index) => (
                    <MenuItem item={item} key={index} toggle={toggle}/>
                ))}
            </motion.ul>
        </div>
    );
}

const items = [
    {title: "Обо мне", link: "/#about"},
    {title: "Навыки", link: "/#skills"},
    {title: "Услуги", link: "/#service"},
    {title: "Портфолио", link: "/#portfolio"},
    {title: "Контакты", link: "/#contacts"},
];
