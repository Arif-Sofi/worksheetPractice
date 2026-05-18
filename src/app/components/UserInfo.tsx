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
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 bg-secondary/5 p-6 rounded-2xl border-2 border-dashed border-secondary/30">
      {/* NAME INPUT SECTION */}
      <div className="flex items-center w-full sm:w-auto">
        <label className="font-montserrat font-bold text-xl text-black mr-3 whitespace-nowrap">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)} // Calling the parent's handler.
          disabled={isSubmitted} // Locking the input if the worksheet is finished.
          placeholder="Enter your name"
          className="w-full sm:w-64 bg-white border-2 border-secondary/20 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all font-medium disabled:bg-gray-50 disabled:text-gray-400"
        />
      </div>
      
      {/* SCORE DISPLAY SECTION */}
      <div className="text-2xl font-montserrat flex items-center">
        <span className="font-bold text-black mr-3">Score: </span>
        <div className="bg-gray-100 border-2 border-secondary/20 rounded-xl min-w-25 h-12 flex items-center justify-center px-4">
          {/* If score is null (not submitted), show the placeholder "____" */}
          <span className={score !== null ? "text-black font-bold" : "text-gray-300"}>
            {score !== null ? `${score} / ${totalQuestions}` : "— / —"}
          </span>
        </div>
      </div>
    </div>
  );
}
