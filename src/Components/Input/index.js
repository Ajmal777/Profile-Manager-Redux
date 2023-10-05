import React from "react";
import './style.css'
const Input = ({ type, required, value, className, placeholder, children, fileType, autoComplete, onChange }) => {
    return (
        <input
            className={className}
            value={value}
            autoComplete={autoComplete}
            type={type}
            required={required}
            placeholder={placeholder}
            accept={fileType}
            onChange={onChange}
        >
            {children}
        </input>
    )
}

export default Input;