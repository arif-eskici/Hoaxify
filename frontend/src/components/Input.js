import React from "react";

const Input = (props) => {
    const {label, error, name, onChange, type, defaultValue} = props;
    let className="form-control";

    if (type == "file") {
        className += "-file"
    }

    if (error != undefined) {
        className += " is-invalid";
    }
    // const className = error ? "form-control is-invalid" : "form-control mt-1"
    return (
        <div className="form-group p-2">
            <label>{label}</label>
            <input className={className} name={name} onChange={onChange} type={type} defaultValue={defaultValue} />
            <div className="invalid-feedback">{props.error}</div>
        </div>

    )
}

export default Input;

