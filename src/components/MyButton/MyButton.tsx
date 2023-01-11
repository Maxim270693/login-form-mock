import React, {ReactNode} from "react";

type ButtonType = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    className: string
};

const MyButton = ({ children, type, className }: ButtonType) => {

    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};

export default MyButton;