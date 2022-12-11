import React, {FC} from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField: FC<InputFieldProps> = ({type, value, onChange, ...rest}) => {
    return <input type={type} value={value} onChange={onChange} {...rest}/>;
}