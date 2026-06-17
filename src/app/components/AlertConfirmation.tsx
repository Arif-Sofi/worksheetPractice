import React from "react";
import Button from "./SingleButton";

interface AlertConfirmationProps{
    title: string;
    message : string;
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function AlertConfirmation({
    title,
    message,
    isOpen,
    onCancel,
    onConfirm
} : AlertConfirmationProps){
    if(!isOpen) return null;

    return(
        // MODAL OVERLAY: Fixed positioning, centering flex, and backdrop blur.
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            {/* MODAL CONTENT BOX: Claymorphism style with rounded corners, thick borders, and soft shadows. */}
            <div className="flex flex-col items-center gap-6 bg-white rounded-[2.5rem] border-3 border-secondary p-10 max-w-sm w-full text-center transform transition-all animate-in zoom-in-95 duration-300">
                <div>
                    <h3 className="text-2xl font-montserrat font-bold text-black mb-2">
                        {title}
                    </h3>
                </div>
                <div>
                    <p className="text-black font-montserrat">
                        {message}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 w-full mt-4">

                    {/* <Button 
                        title="Cancel"
                        className = "cursor-pointer flex-1 bg-secondary/5 border-secondary/30 py-3"
                        onClick={onCancel}
                        disabled={undefined}
                    />
                    <Button 
                        title="Confirm"
                        className = "cursor-pointer flex-1 bg-red-200 border-red-700 py-3"
                        onClick={onConfirm}
                        disabled={undefined}
                    /> */}
                    <button
                        onClick={onCancel}
                        className="cursor-pointer flex-1 bg-secondary/5 border-2 border-secondary/30 text-black font-montserrat font-bold py-3 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="cursor-pointer flex-1 bg-red-200 border-2 border-red-700 text-black font-montserrat font-bold py-3 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )

}