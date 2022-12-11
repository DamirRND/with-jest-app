import React, {ChangeEvent, FC} from "react";

interface InputFieldProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    type: string;
    value: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputFieldProps> = ({type, value, onChange, ...rest}) => {
    return <input type={type} value={value} onChange={onChange} {...rest}/>;
}