import React from "react"; // Importing React.

interface StudentInfoProps {
  name: string;
  onNameChange: (val: string) => void;
  score: number | null;
  totalQuestions: number;
  isSubmitted: boolean;
}

export default function StudentInfo({
  name, // The current name string.
  onNameChange, // Function to update the name in the parent's state.
  score, // The calculated score (number).
  totalQuestions, // Total count for display (e.g., / 12).
  isSubmitted // Boolean to disable input after submission.
}: StudentInfoProps) {
  return (
  // Tailwind: flex layout that stacks on mobile (flex-col) and rows on small screens (sm:flex-row).
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      {/* NAME INPUT SECTION */}
      <div>
        <label className="font-bold mr-2">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)} // Calling the parent's handler.
          disabled={isSubmitted} // Locking the input if the worksheet is finished.
          placeholder="Your name here"
          className="border border-gray-400 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
        />
      </div>
      
      {/* SCORE DISPLAY SECTION */}
      <div className="text-xl">
        <span className="font-bold">Score: </span>
        <span className="border-b border-black min-w-15 inline-block text-center px-2">
          {/* If score is null (not submitted), show the placeholder "____" */}
          {score !== null ? `${score} / ${totalQuestions}` : ""}
        </span>
      </div>
    </div>
  );
}
