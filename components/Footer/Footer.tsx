import s from "../../scss/modules/footer.module.scss"
import logo from "../../images/logoFooter.svg"
import Image from "next/image";
import React from "react";
import {ARRAY_MENU, ARRAY_SOCIALS} from "../../utils/constants";
import Link from "next/link";

const Footer: React.FC = () => {
    return(
        <footer className={s.footer}>
            <div className={s.footer__wrapper}>
                <div className={s.footer__top}>
                    <div className={s.footer__logoLink}>
                        <Link href="/">
                            <Image src={logo} draggable={false}/>
                        </Link>
                    </div>
                    <nav>
                        <ul className={s.footer__menu}>
                            {
                                ARRAY_MENU.map((item, index) => (
                                    <Link key={index} href={item.link}>
                                        <li className={s.footer__menu_link}>{item.name}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className={s.footer__bottom}>
                    <p className={s.footer__author}>© kejero 2021-2023</p>
                    <div className={s.footer__socials}>
                        {
                            ARRAY_SOCIALS.map((item, i) => (
                                <a key={i} href={item.link} target="_blank" aria-label='ссылка'>
                                    <div className={s.footer__social}>
                                        <Image alt='социальная сеть' src={item.icon} width={20} height={20} />
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
