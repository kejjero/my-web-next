import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "./use-dimensions";
import {MenuToggle} from "./MenuToggle";
import {Navigation} from "./Navigation";
import s from "../../scss/modules/menu.module.scss"

export const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {right} = useDimensions(containerRef);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 100}px at 125px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: `circle(25px at ${229}px 40px)`,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 40
            }
        }
    };

    return (
        <div className={`menu ${isOpen && "menu_active"}`}>
            <div className={`blur ${isOpen && "blur_active"}`} onClick={() => toggleOpen()}></div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={right}
                ref={containerRef}
                className={s.nav}
            >
                <motion.div className={s.background} variants={sidebar}/>
                <Navigation toggle={() => toggleOpen()} isOpen={isOpen}/>
                <MenuToggle toggle={() => toggleOpen()}/>
            </motion.nav>
        </div>
    );
};
