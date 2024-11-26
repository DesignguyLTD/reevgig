import React from "react";
import ReactDOM from "react-dom";

interface DropdownProps {
    isOpen: boolean;
    position: { top: number; left: number };
    children: React.ReactNode; // Add children prop
    background?: boolean;
}

const OverFlowMenu : React.FC<DropdownProps> = ({ isOpen, position, children, background }) => {
    if (!isOpen) return null;


    return ReactDOM.createPortal(
        <div
            className="dropdown-menu"
            style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                zIndex: 1000,
                background: background ? "rgb(39, 39, 39)" : '',
                color: "#fff",
                padding: "8px",
                borderRadius: "4px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            {children}
        </div>,
        document.body
    );
};

export default OverFlowMenu;