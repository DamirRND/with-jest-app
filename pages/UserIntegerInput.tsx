import React, {ChangeEvent, FC, useCallback} from "react";
import {InputField} from "../common/components/InputField";

interface UserIntegerInputProps {
    handleOnChange: (value: number) => void;
    value: number;
}

export const UserIntegerInput: FC<UserIntegerInputProps> = ({handleOnChange, value, ...rest}) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            handleOnChange(event.target.valueAsNumber);
        },
        [handleOnChange]
    );

    return <InputField type="number" value={value} onChange={handleChange} {...rest}/>
}