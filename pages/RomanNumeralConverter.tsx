import {FC, useEffect, useState} from "react";
import {UserIntegerInput} from "@/pages/UserIntegerInput";


export const RomanNumeralConverter: FC = () => {
    const [numberInput, setNumberInput] = useState(0);
    const [romanOutput, setRomanOutput] = useState('');

    useEffect(() => {
        if (numberInput < 1 || numberInput > 1000) {
            setRomanOutput("Number can be greater or equal to 1 and less or equal to 1000");
        } else {
            if (numberInput === 1) {
                setRomanOutput("I");
            }
        }
    }, [numberInput])

    return(
        <>
            <p data-testid="roman-numeral-paragraph">{romanOutput}</p>
            <UserIntegerInput
                handleOnChange={setNumberInput}
                value={numberInput}/>
        </>
    )
}