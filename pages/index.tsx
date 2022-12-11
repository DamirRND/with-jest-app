import Head from 'next/head'

import styles from '@/pages/index.module.css'
import {RomanNumeralConverter} from "@/pages/RomanNumeralConverter";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Roman Numeral Converter</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1 className={styles.title}>Convert from Integer to Roman Numeral</h1>
                <RomanNumeralConverter/>
            </main>
        </div>
    )
}
