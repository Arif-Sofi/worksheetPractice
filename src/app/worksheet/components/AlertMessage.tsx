import React from "react";

import Button from "./SingleButton";

interface AlertMessageProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function AlertMessage({ 
  isOpen, 
  onClose, 
  title, 
  message 
}: AlertMessageProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-[2.5rem] border-3 border-secondary p-8 max-w-sm w-full text-center transform transition-all animate-in zoom-in-95 duration-300"
      >
        <h3 className="text-2xl font-montserrat font-bold text-black mb-2">
          {title}
        </h3>
        
        <p className="text-black font-montserrat mb-8">
          {message}
        </p>
        
        <Button
        onClick={onClose}
        className="cursor-pointer border-2 py-3 px-16 border-black bg-gray-200 font-size hover:bg-secondary/5"
        title="Close"
        disabled={undefined}
      />

        {/* <button
          onClick={onClose}
          className="flex-1 bg-gray-200 border-2 border-secondary/30 text-secondary hover:bg-secondary/5 font-montserrat font-bold py-3 px-16 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Close
        </button> */}
      </div>
    </div>
  );
}
