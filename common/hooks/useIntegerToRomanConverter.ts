import {useEffect, useState} from "react";

export const useIntegerToRomanConverter = (numberInput: number): string => {
    const [romanOutput, setRomanOutput] = useState('');

    useEffect(() => {
        if (numberInput < 1 || numberInput > 1000) {
            setRomanOutput("Number can be greater or equal to 1 and less or equal to 1000");
        } else {
            if (numberInput === 1) {
                setRomanOutput("I");
            }
        }
    }, [numberInput]);

    return (
        romanOutput
    )
}

export default useIntegerToRomanConverter;