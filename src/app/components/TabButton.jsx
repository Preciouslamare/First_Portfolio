import React from "react";

const TabButton = ({ active, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`mr-3 font-semibold py-2 px-4 rounded ${
                active ? "text-white border-b-2 border-purple-500" : "text-[#ADB7BE] hover:text-white"
            }`}
        >
            {children}
        </button>
    );
};

export default TabButton;
