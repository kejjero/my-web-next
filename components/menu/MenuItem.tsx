import * as React from "react";
import { motion } from "framer-motion";
import s from "../../scss/modules/menu.module.scss"

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem: React.FC<any> = ({ item, toggle }) => {

    return (
        <motion.li
            onClick={toggle}
            variants={variants}
            className={s.reset}
            whileHover={{ scale: 1.2 }}
        >
            {
                <a href={item.link} className={s.item}><h3 className={s.item}>{item.title}</h3></a>
            }
        </motion.li>
    );
};
