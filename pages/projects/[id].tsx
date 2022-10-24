import {useRouter} from "next/router";
import s from "../../scss/modules/project.module.scss"
import Image from "next/image"
import work from "../../images/work.jpg"
import workLogo from "../../images/workLogo.svg"
import TopSection from "../../components/TopSection";
import redux from "../../images/skills/redux.svg"
import {mockupsAcro} from "../../utils/constants"
import {Swiper, SwiperSlide} from "swiper/react";
import {projects} from "../../utils/constants"
import {useEffect, useState} from "react";


const Project = () => {
    const {query} = useRouter()
    const findWork = projects.find((item) => item.id === query.id)

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
                    <Image src={findWork?.intro?.imageLogo} width={301}/>
                </div>
                <div className={s.project__bottomLine}>
                    <ul className={s.project__stats}>
                        {
                            findWork?.intro?.statusItems.map((item) => (
                                <li className={s.project__statsItem} key={item.title}>
                                    <h4 className={s.project__statsTitle}>{item.title}</h4>
                                    <span className={s.project__statsValue}>{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={s.project__lineButtons}>
                        <a href={findWork?.intro.linkDemo}>
                            <button className={s.project__lineButton_full}>Demo</button>
                        </a>
                        <a href={findWork?.intro.linkGitHub}>
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
                            <p className={s.project__paragraph}>{findWork?.about}</p>
                        </div>
                        <div className={s.project__addItem}>
                            <h5 className={s.project__aboutTitle}>Дополнительно</h5>
                            <p className={s.project__paragraph}>{findWork?.description}</p>
                        </div>
                        <div className={s.project__skills}>
                            <h5 className={s.project__aboutTitle}>Стек технологий</h5>
                            <ul className={s.project__skillsGroup}>
                                {
                                    findWork?.skills.map((item, i) => (
                                        <li className={s.project__skillsItem} key={i}>
                                            <Image src={item?.icon} height={40} width={40}/>
                                            <h6 className={s.project__skillsTitle}>{item?.title}</h6>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.project__swiperWrapper}>
                    <Swiper

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