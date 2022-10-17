import styles from "../scss/modules/A.module.scss"
import Link from "next/link";
import React from "react";
import {ILink} from "../types/components";

const A: React.FC<ILink> = ({children, href, target="_self"}) => {
    return (
        <Link href={href} target={target}>
            <a className={styles.link}>{children}</a>
        </Link>
    )
}

export default A;