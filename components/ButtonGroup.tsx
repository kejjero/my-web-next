import skills from "../scss/modules/skills.module.scss";
import Button from "./Button";
import React, {useEffect, useState} from "react";

const ButtonGroup: React.FC = () => {
    const [widthWindow, setWidthWindow] = useState<number>();

    useEffect(() => {
        setWidthWindow(window.screen.width)
    },[])

    return(
        <div className={skills.skills__buttonGroup}>
                <Button width={widthWindow >= 520 ? 137 : ''}>Frontend</Button>
                <Button width={widthWindow >= 520 ? 137 : ''} fill={true}>Backend</Button>
                <Button width={widthWindow >= 520 ? 137 : ''}>Графика</Button>
        </div>
    )
}

export default ButtonGroup