import {useRouter} from "next/router";
import s from "../../scss/modules/project.module.scss"
import Image from "next/image"
import work from "../../images/work.jpg"
import workLogo from "../../images/workLogo.svg"
import TopSection from "../../components/TopSection";
import redux from "../../images/skills/redux.svg"
import {mockupsAcro} from "../../utils/constants"
import {Swiper, SwiperSlide} from "swiper/react";


const Project = () => {
    const {query} = useRouter()
    const statsItems = [
        {title: "Дата разработки", value: "сентябрь 2022"},
        {title: "Категория", value: "Fullstack"},
        {title: "Статус", value: "MVP"}
    ]


    const slides = mockupsAcro.map((item: any, index) => (
            <SwiperSlide key={index} className={s.project__swiperSlide}>
                <Image src={item.mockup} />
            </SwiperSlide>
        )
    )

    return (
        <section className={s.project}>
            <div className={s.project__wrapper}>
                <div className={s.project__workLogo}>
                    <Image src={workLogo} width={301}/>
                </div>
                <div className={s.project__bottomLine}>
                    <ul className={s.project__stats}>
                        {
                            statsItems.map((item) => (
                                <li className={s.project__statsItem} key={item.title}>
                                    <h4 className={s.project__statsTitle}>{item.title}</h4>
                                    <span className={s.project__statsValue}>{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={s.project__lineButtons}>
                        <a>
                            <button className={s.project__lineButton_full}>Demo</button>
                        </a>
                        <a>
                            <button className={s.project__lineButton}>GitHub</button>
                        </a>
                    </div>
                </div>
                <div className={s.project__imageWrapper}>
                    <div className={s.project__background}/>
                    <Image className={s.project__imageWork} src={work}/>
                </div>
            </div>
            <div className={s.project__content}>
                <TopSection title="АркоМебель" subtitle="Онлайн магазин мебели"/>
                <div className={s.project__aboutProject}>
                    <div className={s.project__topWrapper}>
                        <div className={s.project__aboutItem}>
                            <h5 className={s.project__aboutTitle}>О проекте</h5>
                            <p className={s.project__paragraph}>
                                Онлайн магазин мебели с множеством фильтров выбора товара и оформлением онлайн заказа.
                                Проработал архитектурную концепцию проекта под выбранный стек технологий,
                                а также нарисовал UX/UI дизайн.
                            </p>
                        </div>
                        <div className={s.project__addItem}>
                            <h5 className={s.project__aboutTitle}>Дополнительно</h5>
                            <p className={s.project__paragraph}>
                                По своей инициативе собрал команду из 4 Frontend разработчиков. Проработал архитектурную
                                концепцию проекта под выбранный стек технологий, а также нарисовал UX/UI дизайн.
                            </p>
                        </div>
                        <div className={s.project__skills}>
                            <h5 className={s.project__aboutTitle}>Стек технологий</h5>
                            <ul className={s.project__skillsGroup}>
                                <li className={s.project__skillsItem}>
                                   <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                                <li className={s.project__skillsItem}>
                                    <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                                <li className={s.project__skillsItem}>
                                    <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                                <li className={s.project__skillsItem}>
                                    <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                                <li className={s.project__skillsItem}>
                                    <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                                <li className={s.project__skillsItem}>
                                    <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                                <li className={s.project__skillsItem}>
                                    <Image src={redux} height={40} width={40}/>
                                    <h6 className={s.project__skillsTitle}>Redux Toolkit</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.project__swiperWrapper}>
                    <Swiper
                        className={s.project__swiper}
                        spaceBetween={20}
                    >
                        {slides}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Project;