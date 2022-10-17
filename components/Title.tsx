import React from "react";
import {ITitle} from "../types/components";

const Title:React.FC<ITitle> = ({children}) => {
    return <h2 className="title">{children}</h2>
}

export default Title;