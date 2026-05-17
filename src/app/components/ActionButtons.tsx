import React from "react"; // Importing React.

/**
 * COMPONENT: Controls
 * Contains the primary action buttons for the worksheet.
 * This component is "Stateless" — it just emits events to the parent.
 */

interface ControlsProps {
  onSubmit: () => void;
  onReset: () => void;
  isSubmitted: boolean;
}

export default function Controls({
  onSubmit, // Function to trigger calculation and submission.
  onReset, // Function to clear all fields.
  isSubmitted // Boolean to disable the submit button.
}: ControlsProps) {
  return (
  // Tailwind: flex container to center the buttons with a gap.
    <div className="flex justify-center gap-4 mb-6">
      {/* SUBMIT BUTTON */}
      <button 
        onClick={onSubmit} // Calling parent's submit logic.
        disabled={isSubmitted} // Disable once results are shown.
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit
      </button>
      
      {/* RESET BUTTON */}
      <button 
        onClick={onReset} // Calling parent's reset logic.
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-8 rounded transition"
      >
        Reset
      </button>
    </div>
  );
}