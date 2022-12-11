import Head from 'next/head'

import styles from '@/pages/index.module.css'
import {ChangeEvent, useState} from "react";

export default function Home() {
    const [numberInput, setNumberInput] = useState(0);
    const [romanOutput, setRomanOutput] = useState('');
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberInput(() => event.target.valueAsNumber)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Roman Numeral Converter</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1 className={styles.title}>Convert from Integer to Roman Numeral</h1>
                <p data-testid="roman-numeral-paragraph">{romanOutput}</p>
                <input
                    type="number"
                    data-testid="user-number-input"
                    value={numberInput}
                    onChange={handleOnChange}/>
            </main>
        </div>
    )
}
