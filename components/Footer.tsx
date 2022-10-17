import s from "../scss/modules/footer.module.scss"
import logo from "../images/logoFooter.svg"
import Image from "next/image";
import React from "react";
import {ARRAY_MENU, ARRAY_SOCIALS} from "../utils/constants";

const Footer: React.FC = () => {
    return(
        <footer className={s.footer}>
            <div className={s.footer__wrapper}>
                <div className={s.footer__top}>
                    <Image src={logo} />
                    <nav>
                        <ul className={s.footer__menu}>
                            {
                                ARRAY_MENU.map((item, index) => (
                                    <li key={index} className={s.footer__menu_link}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className={s.footer__bottom}>
                    <p className={s.footer__author}>© kejero 2021-2022</p>
                    <ul className={s.footer__socials}>
                        {
                            ARRAY_SOCIALS.map((item, i) => (
                                <li key={i} className={s.footer__social}><Image src={item.icon} width={20} height={20} /></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;