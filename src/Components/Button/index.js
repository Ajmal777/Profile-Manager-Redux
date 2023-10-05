import React from "react";
import './style.css'
const Button = ({ className, children, type, name, id , onClick }) => {
    return (
        <button className={"btn " + className} type={type} onClick={onClick} name={name} id={id}>
            {children}
        </button>
    )
}

export default Button;