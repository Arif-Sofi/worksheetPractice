import React from "react"; // Importing React.

import Button from "./SingleButton";


interface ActionButtonsProps {
  onSubmit: () => void;
  onReset: () => void;
  isSubmitted: boolean;
}

export default function ActionButtons({
  onSubmit, // Function to trigger calculation and submission.
  onReset, // Function to clear all fields.
  isSubmitted // Boolean to disable the submit button.
}: ActionButtonsProps) {
  return (
  // Tailwind: flex container to center the buttons with a gap.
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
      {/* RESET BUTTON */}
      <Button
        onClick={onReset}
        className = "border-2 border-red-700 bg-red-200 cursor-pointer text-xl"
        title="Reset"
        disabled={undefined}
      />

      {/* <button 
        onClick={onReset} // Calling parent's reset logic.
        className="w-full sm:w-auto border-2 bg-red-200 border-red-700 text-secondary hover:bg-secondary/5 font-montserrat font-bold py-4 px-12 rounded-2xl text-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        Reset
      </button> */}

      {/* SUBMIT BUTTON */}
      <Button
        onClick={onSubmit}
        className = "border-2 border-green-700 bg-green-200 text-xl"
        title="Submit"
        disabled={isSubmitted}
      />

      {/* <button 
        onClick={onSubmit} // Calling parent's submit logic.
        disabled={isSubmitted} // Disable once results are shown.
        className="w-full sm:w-auto bg-green-200 border-2 border-green-700 text-black hover:bg-secondary/5 font-montserrat font-bold py-4 px-12 rounded-2xl text-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        Submit
      </button> */}
    </div>
  );
}