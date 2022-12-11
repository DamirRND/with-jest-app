import {useEffect, useState} from "react";

const getRomanNumeral = (userInput: number): string => {
    let romanNumeral = '';
    if (userInput === 1) {
        romanNumeral = 'I';
    }
    return romanNumeral;
}
const handleInput = (userInput: number): string => {
    if (isNaN(userInput)) return '';
    if (userInput < 1 || userInput > 1000) return 'Number can be greater or equal to 1 and less or equal to 1000';
    return getRomanNumeral(userInput);
}
const useIntegerToRomanConverter = (numberInput: number): string => {
    const [romanOutput, setRomanOutput] = useState('');

    useEffect(() => {
        setRomanOutput(handleInput(numberInput));
    }, [numberInput]);

    return (
        romanOutput
    )
}

export default useIntegerToRomanConverter;