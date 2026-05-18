import React from "react";

interface ButtonProps{
    className: string;
    title: string;
    onClick: () => void;
    disabled: boolean | undefined;
}

export default function Button({className, title, onClick, disabled}: ButtonProps){ //is the same as Button({className}: {className: string})
    // const style: string = `${styles}`
    //border-2 bg-red-200 border-red-700
    return(
        <button
        onClick={onClick}
        disabled={disabled}
        className = {`${className} border-2 w-full sm:w-auto text-black font-montserrat font-bold py-4 px-12 rounded-2xl transition-all 
            ${ !disabled
             ?"hover:scale-[1.02] active:scale-[0.98] cursor-pointer": "cursor-not-allowed"}`}
        >
            {title}
        </button>
    )
}