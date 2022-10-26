import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "./use-dimensions";
import {MenuToggle} from "./MenuToggle";
import {Navigation} from "./Navigation";
import s from "../../scss/modules/menu.module.scss"

export const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [activeBlock, setActiveBlock] = useState(false)
    const [width, setWidth] = useState<number>()
    const containerRef = useRef(null);
    const {right} = useDimensions(containerRef);

    const clipValue = () => {
        if (width > 520) {
            return 229
        } else  {
            return 270
        }
    }

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
            clipPath: `circle(25px at ${clipValue()}px 40px)`,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 40
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setActiveBlock(true), 100)
        } else {
            setTimeout(() => setActiveBlock(false), 1500)
        }
        setWidth(window.screen.width)
    },[isOpen])

    return (
        <div className={`menu ${isOpen && "menu_active"}`}>
            <div className={`blur ${isOpen && "blur_active"}`} onClick={() => toggleOpen()}></div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={right}
                ref={containerRef}
                className={`nav ${activeBlock && "nav_active"}`}
            >
                <motion.div className={s.background} variants={sidebar}/>
                <Navigation toggle={() => toggleOpen()} isOpen={isOpen}/>
                <MenuToggle toggle={() => toggleOpen()} activeBlock={activeBlock}/>
            </motion.nav>
        </div>
    );
};
