import React from "react"; // Importing React to use JSX.

import {Question} from "../data/questions"

/**
 * COMPONENT: QuestionItem
 * Now styled with Tailwind CSS utility classes instead of inline styles.
 */



interface QuestionItemProps { 
  question: Question; 
  userAnswer: string; 
  onSelect: (id: number, val: string) => void; 
  isDisabled: boolean;
}

export default function QuestionItem({ 
  question, // The question data object.
  userAnswer, // The current answer selected by the user.
  onSelect, // Function to call when an answer is selected.
  isDisabled // Boolean to disable inputs after submission.
}: QuestionItemProps) {
    return (
    // Tailwind: border (1px), border-gray-300, p-4 (padding), rounded-lg (border-radius).
      <div className="border border-gray-300 p-4 rounded-lg">
        {/* Tailwind: font-bold for the question text */}
        <p className="font-bold mb-2">{question.text}</p>
        
        {/* Tailwind: list-none (remove bullets), p-0 (reset padding) */}
        <ul className="list-none p-0">
          {question.options.map((opt) => (
            <li key={opt.value} className="my-2">
              {/* Tailwind: flex, items-center (vertical alignment), cursor pointer/default */}
              <label className={`flex items-center ${isDisabled ? "cursor-default" : "cursor-pointer"}`}>
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  value={opt.value}
                  checked={userAnswer === opt.value}
                  onChange={() => onSelect(question.id, opt.value)}
                  disabled={isDisabled}
                  // Tailwind: mr-2 (margin-right)
                  className="mr-2"
                />
                {opt.label}
              </label>
            </li>
          ))}
        </ul>

        {/* FEEDBACK SECTION */}
        {isDisabled && (
          <div className="text-sm mt-2">
            {userAnswer === question.correctAnswer ? (
              // Tailwind: text-green-600
              <span className="text-green-600 font-medium">✓ Correct</span>
            ) : (
              // Tailwind: text-red-600
              <span className="text-red-600 font-medium">✘ Incorrect. Correct: {question.correctAnswer}</span>
            )}
          </div>
        )}
      </div>
  );

}