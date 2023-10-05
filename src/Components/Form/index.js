import React from "react";
import './style.css'
const Form = ({ className, children , handleSubmit }) => {

    return (
        <form className={"form " + className} onSubmit={handleSubmit}>
            {children}            
        </form>
    )
}

export default Form;