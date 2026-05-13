import { useState } from "react";
import QuestionCard from "./QuestionCard";
import { worksheetQuestions } from "../data/questions";

export default function WorksheetQuestions() {
    return (
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 gap-4">
          {/* Individual Question Cards go here */}
          {worksheetQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
    );
}