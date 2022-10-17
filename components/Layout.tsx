import Header from "./Header";
import Footer from "./Footer";
import React, {useState} from "react";
import {ILayout} from "../types/components"
import { motion, useCycle } from "framer-motion";

const Layout: React.FC<ILayout> = ({children}) => {

    return (
        <div className="wrapper">
            <Header/>
            <main className="content">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;