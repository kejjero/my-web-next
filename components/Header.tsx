import s from "../scss/modules/header.module.scss"
import Image from "next/image";
import logo from "../images/logo.svg"
import React from "react";
import Link from "next/link";
import {Menu} from "./menu/Menu";

const Header: React.FC<any> = () => {

    return (
        <header className={s.header}>
                <div className={s.header__wrapper}>
                    <Link href="/">
                        <Image draggable={false} priority src={logo} className={s.header__logo}/>
                    </Link>
                    <Menu/>
                </div>
        </header>
    )
}

export default Header;