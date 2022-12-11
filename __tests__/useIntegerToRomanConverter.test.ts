import {renderHook} from "@testing-library/react";
import useIntegerToRomanConverter from "../common/hooks/useIntegerToRomanConverter";

describe('useIntegerToRomanConverter custom hook', () => {
    it('should have string output', () => {
        const useIntegerToRomanConverterHook = renderHook(() => useIntegerToRomanConverter(1));
        const expected = 'I';
        const received = useIntegerToRomanConverterHook.result.current;
        expect(received).toEqual(expected);
    })
})