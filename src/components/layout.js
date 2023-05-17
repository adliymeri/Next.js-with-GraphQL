import Header from "./header";
import styles from '@/styles/Home.module.scss'
import { useState } from "react";

export default function Layout ({children}) {

    

    return (
        <>
            <Header/>
            {children}
            {/* <Footer/> */}
        </>
    )
}