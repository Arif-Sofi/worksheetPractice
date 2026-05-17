"use client"; // Marks this as a Client Component for interactivity.

import React, { useState } from "react"; // Importing React and useState hook.
import { WORKSHEET_DATA } from "./data/questions"; // Importing static question data.

/**
 * MODULAR COMPONENT IMPORTS
 * We have broken the page down into small, single-responsibility files.
 * This makes the main page very easy to read and manage.
 */
import Header from "./components/Header";
import StudentInfo from "./components/UserInfo";
import QuestionItem from "./components/QuestionItem";
import Controls from "./components/ActionButtons";
import Copyright from "./components/CopyrightInfo";

/**
 * MAIN PAGE COMPONENT: WorksheetPage
 * This is now a "Clean" orchestrator. It doesn't contain UI details,
 * only the Logic and the Layout of components.
 */
export default function WorksheetPage() {
  // STATE: The name of the student.
  const [name, setName] = useState("");
  // STATE: Mapping question IDs to user's selected values.
  const [answers, setAnswers] = useState<Record<number, string>>({}); // Record is like Mapping, this one maps selected answer to qiD
  //example of Record
  // scores: Record <string, number> = {
  // alice: 90,
  // bob: 85,
  //};

  // STATE: Tracks if the form has been submitted.
  const [submitted, setSubmitted] = useState(false);
  // STATE: Stores the numeric score.
  const [score, setScore] = useState<number | null>(null); //score variable is either any number or null

  /**
   * LOGIC: Updates the selected answer for a specific question.
   */
  const handleSelectAnswer = (id: number, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  /*
    Normal function
    function name(params) {
      statements
      return value; // expression
    }
    Arrow function
    HAVE RETURN VALUE;
    params => value; //1 param, return val
    (params) => value; //same thing
    (param1, paramN) => value;
    () => value;

    NO RETURN VALUE, BUT HAVE STATMENTS;
    anything after '=>' that is not {} is considered a return value
    const handleSelectAnswer = (id: number, val: string) => { //after => is {} therefore this is just statements, no return value
    ...
    };

    RETURN VALUE
    prev => ({ ...prev, [id]: val }) //after => is () therefore this is a return value, return an object {...prev, [id]: val }

    HAVE STATEMENTS;
    if have statements, need return keyword and curly braces
    (params) => {
      stamemts;
      return value;
    }
  */

  /**
   * LOGIC: Validates name and calculates the score.
   */
  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    
    // Using .reduce to iterate and count correct answers.
    const finalScore = WORKSHEET_DATA.reduce((acc, q) => {
      return answers[q.id] === q.correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(finalScore);
    setSubmitted(true);
  };
  
  //reduce(callback function, initialValue) returns ONE SINGLE VALUE, callback function has (accumulator, currentValue) as params 
    //array.reduce((accumulator@intialValue, currentValue) => { return accumulator@initial + currentValue}, initialValue)
    /*
    let arr: number[] = [2, 5, 6, 3, 8, 9];  

    // Using reduce() method to perform a custom calculation
    let result: number = arr.reduce((a, b) => {  
        return a * b / 2;  
    }, 1); 
    result is 202.5
    */

  /**
   * LOGIC: Resets all state variables to clear the form.
   */
  const handleReset = () => {
    setName("");
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  return (
    // MAIN CONTAINER: Centered with max-width.
    <div className="max-w-5xl mx-auto p-5 font-sans text-gray-900">
      
      {/* 1. Header Component */}
      <Header />

      {/* 2. Student Info Component (Name + Score) */}
      <StudentInfo 
        name={name}
        onNameChange={setName}
        score={score}
        totalQuestions={WORKSHEET_DATA.length}
        isSubmitted={submitted}
      />

      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <p className="italic mb-6 text-gray-700">Circle the correct answers.</p>
        </div>

        {/* 3. Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSHEET_DATA.map((q) => (
            <QuestionItem
              key={q.id}
              question={q}
              userAnswer={answers[q.id] || ""}
              onSelect={handleSelectAnswer}
              isDisabled={submitted}
            />
          ))}
        </div>
      </div>
      

      {/* 4. Controls Component (Submit + Reset) */}
      <div className="mt-12">
        <Controls 
          onSubmit={handleSubmit}
          onReset={handleReset}
          isSubmitted={submitted}
        />
      </div>

      {/* 5. Copyright Component */}
      <Copyright />
      
    </div>
  );
}
