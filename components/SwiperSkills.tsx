import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Image from "next/image";
import skills from "../scss/modules/skills.module.scss";


const SwiperSkills: React.FC<any> = ({filterSkills}) => {

    const slides = filterSkills.map((item: any, index) => (
            <SwiperSlide key={index}>
                <li key={item.title} className={skills.skills__skillsGroup__skill}>
                    <Image width={60} height={60} className={skills.skills__icon} src={item.icon} />
                    <h3 className={skills.skills__title}>{item.title}</h3>
                </li>
            </SwiperSlide>
        )
    )

    return(
        <div className={skills.skills__swiper}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            >
                {slides}
            </Swiper>
        </div>
    )
}

export default SwiperSkills;