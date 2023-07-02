import Image from "next/image";
import label from "../images/label.svg"
import labelBlack from "../images/label-black.svg"
import React from "react";
import {ILabel} from "../types/components";

const Label: React.FC<ILabel> = ({width, height, styles, isBlack}) => (
    <Image alt='логотип' width={width} height={height} src={isBlack ? labelBlack : label} style={styles}/>
)

export default Label
