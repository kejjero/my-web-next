import s from "./Header/header.module.scss"

const Burger = ({setIsOpen, isOpen}) => {
    return(
        <div className={s.burger} onClick={() => setIsOpen(!isOpen)}>
            <span className={s.burger__title}>меню</span>
            <ul className={s.burger__items}>
                <li className={s.burger__item}></li>
                <li className={s.burger__item}></li>
                <li className={s.burger__item}></li>
            </ul>
        </div>
    )
}

export default Burger;
