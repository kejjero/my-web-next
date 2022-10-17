import s from "../scss/modules/portfolio.module.scss"
import Image from "next/image";
import button from "../scss/modules/Button.module.scss"
import React, {useEffect, useState} from "react";
import {IWork} from "../types/components";
import Link from "next/link";
import workLogo from "../images/workLogo.svg"

const Work: React.FC<IWork> = ({item}) => {
    const [widthImage, setWidthImage] = useState<number>();
    const [heightImage, setHeightImage] = useState<number>();
    const [widthWindow, setWidthWindow] = useState<number>();
    const [hoverImage, setHoverImage] = useState<boolean>();
    const [onClickWork, setOnClickWork] = useState<boolean>();

    useEffect(() => {
        setWidthWindow(window.screen.width)
        if (window.screen.width >= 920) {
            setWidthImage(460)
            setHeightImage(310)
        } else {
            setWidthImage(920)
            setHeightImage(500)
        }

    }, [])

    useEffect(() => {
        if (onClickWork) {
            const html = document.querySelector("html")
            html.classList.add("html_scroll-disabled")

        } else {
            const html = document.querySelector("html")
            html.classList.remove("html_scroll-disabled")
        }

    }, [onClickWork])


    return (
        <li className={s.portfolio__work}>
            <div className={s.portfolio__imageWrapper}>
                {
                    widthWindow < 768 &&
                    <div className={s.portfolio__workWrapper}>
                        <h3 className={s.portfolio__title}>{item.title}</h3>
                    </div>
                }
                <div
                    // onMouseEnter={() => setHoverImage(true)}
                    // onMouseLeave={() => setHoverImage(false)}
                    className={`portfolio__imageDiv ${hoverImage && "portfolio__imageDiv_active"}`}
                >
                    <div className={`portfolio__content ${hoverImage && "portfolio__content_active"}`}>
                        <div className={s.portfolio__workHeader}>
                            <Image src={workLogo} width={154} />
                            <div className={s.portfolio__workButtons}>
                                <button className={s.portfolio__workButton}>Demo</button>
                                <button className={s.portfolio__workButton}></button>
                            </div>
                        </div>
                    </div>
                    <Image src={item.image} className={`portfolio__image`} height={heightImage} width={widthImage}/>
                </div>
            </div>
            {
                widthWindow >= 768 &&
                <div className={s.portfolio__workWrapper}>
                    <p className={s.portfolio__tag}>{item.tag}</p>
                    <h3 className={s.portfolio__title}>{item.title}</h3>
                    <Link href={`/projects/${item.linkId}`}>
                        <button className={button.button} onClick={() => setOnClickWork(true)}>Подробнее</button>
                    </Link>
                </div>
            }
        </li>
    )
}

export default Work;