import Head from 'next/head'

import styles from '@/pages/index.module.css'
import {ChangeEvent, useEffect, useState} from "react";

export default function Home() {
    const [numberInput, setNumberInput] = useState(0);
    const [romanOutput, setRomanOutput] = useState('');
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberInput(() => event.target.valueAsNumber)
    }

    useEffect(() => {
        if(numberInput < 1 || numberInput > 1000) {
            setRomanOutput("Number can be greater or equal to 1 and less or equal to 1000");
        }else {
            if (numberInput === 1) {
                setRomanOutput("I");
            }
        }
    }, [numberInput])

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
