import React from "react";

type LogoutPopupProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

 const LogoutPopup: React.FC<LogoutPopupProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                zIndex: 1000,
                left: 0,
                bottom: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    top: '50%',
                    position: 'absolute',
                    borderRadius: "10px",
                    textAlign: "center",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h3>Are you sure you want to logout?</h3>
                <div style={{ marginTop: "10px" }}>
                    <button
                        style={{
                            marginRight: "10px",
                            padding: "10px",
                            borderRadius: "5px",
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button
                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            backgroundColor: "gray",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                        onClick={onClose}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

 export default  LogoutPopup;

