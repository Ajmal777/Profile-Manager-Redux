import React, { useEffect, useState } from "react";
import './style.css'
const Alert = ({ children, title, message, className, duration=3000 }) => {

    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => setShow(false), duration);
    }, [duration]);

    if(!show){
        return null;
    }

    return (
        <div className={`alert ` + className} role="alert">
            <h4 className="alert-heading">{title}</h4>
            <p className="alert-message"> {message} </p>
            {children}
        </div>
    )
}

export default Alert;