import '../scss/globals.scss'
import '../scss/normalize.scss'
import Layout from "../components/Layout";
import { AppProps } from "next/app"
import {useState} from "react";

export default function MyApp({Component, pageProps}: AppProps) {

    return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
    )
}