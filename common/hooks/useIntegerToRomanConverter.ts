import {useEffect, useState} from "react";

const romanNumeralLookup: { [key: string]: number } = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
}
const getRomanNumeral = (userInput: number): string => {
    let romanNumeral = '';
    for (const key in romanNumeralLookup) {
        while (userInput >= romanNumeralLookup[key]) {
            romanNumeral += key;
            userInput -= romanNumeralLookup[key];
        }
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