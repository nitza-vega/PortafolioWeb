import React from "react";

export default function Button({
    text,
    hasIcon,
    icon, 
    variant = "secondary",
    disabled = false,
    children,
    onClick
}) {
    return(
        <>
            <button className={`button ${variant} ${disabled ? "disabled" : ""}`} onClick={disabled ? undefined : onClick}>
                {hasIcon && <span className="icon">{ icon }</span>}
                {text && <span>{ text }</span>}
                {children}
            </button>

            <style>{`
                button {
                    padding: 10px 18px;
                    border-radius: 100px;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }

                .button:hover {
                    transform: scale(1.05);
                }

                .primary {
                    background: linear-gradient(to bottom, #8732CD, #B27CDF, #C8A1E8);
                }

                .secondary {
                    background: none;
                    border: 3px solid;
                    border-radius: 100px;
                    border-image: linear-gradient(to bottom, #8732CD, #B27CDF, #C8A1E8) 1;
                }
            `}</style>
        </>
    )
}