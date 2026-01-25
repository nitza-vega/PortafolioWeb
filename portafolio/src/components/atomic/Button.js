import React from "react";

export default function Button({
    variant = "primary",
    disabled = false,
    children,
    onClick
}) {
    return(
        <>
            <button className={`${variant} ${disabled ? "disabled" : ""}`} onClick={disabled ? undefined : onClick}>
                {children}
            </button>
            <style>
                button {

                }
            </style>
        </>
    )
}