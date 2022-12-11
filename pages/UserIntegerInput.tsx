import React, {ChangeEvent, FC, useCallback} from "react";
import {InputField} from "../common/components/InputField";

interface UserIntegerInputProps {
    onChange: (value: number) => void;
    value: number;
}

export const UserIntegerInput: FC<UserIntegerInputProps> = ({onChange, value, ...rest}) => {
    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.valueAsNumber);
        },
        [onChange]
    );

    return <InputField type="number" value={value} onChange={handleOnChange} {...rest}/>
}