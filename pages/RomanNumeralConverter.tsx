import {FC, useState} from "react";
import {UserIntegerInput} from "@/pages/UserIntegerInput";
import useIntegerToRomanConverter from "../common/hooks/useIntegerToRomanConverter";


export const RomanNumeralConverter: FC = () => {
    const [numberInput, setNumberInput] = useState(0);
    const output = useIntegerToRomanConverter(numberInput);
    return (
        <>
            <p data-testid="roman-numeral-paragraph">{output}</p>
            <UserIntegerInput
                data-testid="user-number-input"
                handleOnChange={setNumberInput}
                value={numberInput}/>
        </>
    )
}