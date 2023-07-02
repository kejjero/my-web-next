import s from "../scss/modules/section.module.scss"
import React from "react";
import {ITopSection} from "../types/components";

const TopSection: React.FC<ITopSection> = ({title, subtitle, isBlack = false}) => {
    return (
        <div className={s.section__topWrapper}>
            {
                isBlack ?
                    <>
                        {/*<Label width={44} height={30} isBlack/>*/}
                        <h2 className={s.section__title_black}>{title}</h2>
                        <h3 className={s.section__subtitle_black}>{subtitle}</h3>
                    </>
                    :
                    <>
                        {/*<Label width={44} height={30}/>*/}
                        <h2 className={s.section__title}>{title}</h2>
                        <h3 className={s.section__subtitle}>{subtitle}</h3>
                    </>
            }
        </div>
    )
}

export default TopSection;
