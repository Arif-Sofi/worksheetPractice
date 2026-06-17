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
    // Tailwind: border (2px), border-secondary/20, p-6 (padding), rounded-2xl.
      <div className={`border-2 p-6 rounded-2xl transition-all duration-300 ${isDisabled ? "bg-gray-50 border-gray-200" : "bg-white border-secondary/20 shadow-[0_4px_0_rgba(129,140,248,0.1)] hover:shadow-[0_8px_0_rgba(129,140,248,0.1)] hover:-translate-y-1"}`}>
        {/* Tailwind: font-montserrat, font-bold for the question text */}
        <p className="font-montserrat font-bold text-xl mb-4 text-black">{question.text}</p>

        {/* Tailwind: list-none (remove bullets), p-0 (reset padding) */}
        <ul className="space-y-3">
          {question.options.map((opt) => {
            const isSelected = userAnswer === opt.value;
            const isCorrectAnswer = question.correctAnswer === opt.value;
            let optionClasses = "";
            const activeSelectionClasses = "bg-background/40 border-secondary/50 text-black font-bold";
            const defaultSelectionClasses = "bg-white border-gray-100 text-black hover:border-secondary/50";

            if (isDisabled){
              if(isSelected && isCorrectAnswer)
                optionClasses = "bg-green-100 border-dashed border-green-500 font-bold";
              else if(isSelected && !isCorrectAnswer)
                optionClasses = activeSelectionClasses;
              else if(isCorrectAnswer && !isSelected)
                optionClasses = "bg-red-100 border-dashed border-red-500 font-bold";
              else
                optionClasses = "opacity-75 bg-white border-gray-100 text-black"
            } 
            else{
              optionClasses = isSelected ? activeSelectionClasses : defaultSelectionClasses;
            }

            return (
              <li key={opt.value}>
                {/* Tailwind: flex, items-center (vertical alignment), cursor pointer/default */}
                <label className={`flex items-center p-3 rounded-xl border-2 transition-all ${optionClasses}
                ${  isDisabled 
                    ? "cursor-not-allowed"
                    : "cursor-pointer"}`}>
                  <input
                    type="radio"
                    name={`q-${question.id}`}
                    value={opt.value}
                    checked={isSelected}
                    onChange={() => onSelect(question.id, opt.value)}
                    disabled={isDisabled}
                    // Tailwind: mr-3 (margin-right)
                    className={`w-5 h-5 text-primary border-gray-300 focus:ring-primary accent-primary mr-3 
                      ${  isDisabled 
                          ? "cursor-not-allowed"
                          : "cursor-pointer"}`}
                  />
                  <span className="text-lg">{opt.label}</span>
                </label>
              </li>
            );
          })}
        </ul>

        {/* FEEDBACK SECTION */}
        {isDisabled && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {userAnswer === question.correctAnswer 
            ? (
              // Tailwind: text-green-600
              <div className="flex items-center text-green-600 font-bold text-lg animate-bounce-short">
                <span>Correct!</span>
              </div>
            ) 
            : (
              // Tailwind: text-red-600
              <div className="flex items-center text-red-500 font-bold text-lg">
                <span>Incorrect! Answer: {question.correctAnswer}</span>
              </div>
            )}
          </div>
        )}
      </div>
  );

}