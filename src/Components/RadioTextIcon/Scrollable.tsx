import React from "react";
import gross from "../../Pages/Profile/profile.module.css";

const ScrollableComponent: React.FC<{
    children: React.ReactNode;
    style?: React.CSSProperties;
    height: string | number;
    widthProp: string | number;
    direction?: "vertical" | "horizontal";
}> = ({children, style, height, widthProp, direction = "vertical"}) => {
    const scrollStyle: React.CSSProperties = {
        overflowY: direction === "vertical" ? "scroll" : "hidden",
        overflowX: direction === "horizontal" ? "scroll" : "hidden",
        height,
        width: widthProp,
        ...style,
    };

    return (
        <div className={gross.scroll} style={scrollStyle}>
            {children}
        </div>
    );
};

export default ScrollableComponent;
