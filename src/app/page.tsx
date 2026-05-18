"use client"; // Marks this as a Client Component for interactivity.

import React, { useState } from "react"; // Importing React and useState hook.
import { WORKSHEET_DATA } from "./data/questions"; // Importing static question data.

import Header from "./components/Header";
import StudentInfo from "./components/UserInfo";
import QuestionItem from "./components/QuestionItem";
import ActionButtons from "./components/ActionButtons";
import Copyright from "./components/CopyrightInfo";
import AlertMessage from "./components/AlertMessage";
import AlertConfirmation from "./components/AlertConfirmation";
import Button from "./components/SingleButton";

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
  // STATE: Controls the custom alert modal.
  const [showError, setShowError] = useState(false);

  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const [showResetConfirm, setShowResetConfirm] = useState(false);

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
      setShowError(true);
      return;
    }

    setShowSubmitConfirm(true);
  };

  const handleSubmitConfirm = () => {
    // Using .reduce to iterate and count correct answers.
    const finalScore = WORKSHEET_DATA.reduce((acc, q) => {
      return answers[q.id] === q.correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(finalScore);
    setSubmitted(true);
    setShowSubmitConfirm(false);
  }
  
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
    setShowResetConfirm(true);
  };

  const handleResetConfirm = () => {
    setName("");
    setAnswers({});
    setSubmitted(false);
    setScore(null);
    setShowResetConfirm(false);
  };

  return (
    // MAIN CONTAINER: Centered with max-width and a playful background.
    <div className="min-h-screen py-10 px-4 font-montserrat">
      <div className="max-w-5xl mx-auto bg-white rounded-4xl border-3 border-secondary p-8 md:p-12 relative overflow-hidden">
        {/* Decorative elements for a playful feel */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cta/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

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
            <p className="italic mb-8 text-gray-400 font-medium text-lg">Circle the correct answers.</p>
          </div>

          {/* 3. Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="mt-16">
          <ActionButtons 
            onSubmit={handleSubmit}
            onReset={handleReset}
            isSubmitted={submitted}
          />
        </div>

        {/* 5. Copyright Component */}
        <Copyright />

        {/* 6. Custom Alert Modal */}
        <AlertMessage 
          isOpen={showError}
          onClose={() => setShowError(false)}
          title="Missing Info!"
          message="Please enter your name before submitting your worksheet."
        />

        {/* 7. Submit Confirm Modal*/}
        <AlertConfirmation 
          isOpen = {showSubmitConfirm}
          onCancel={() => setShowSubmitConfirm(false)}
          onConfirm={handleSubmitConfirm}
          title="Are you sure?"
          message="Please confirm your answer before submitting."
        />

        {/* 8. Reset Confirm Modal */}
        <AlertConfirmation
          isOpen = {showResetConfirm}
          onCancel={() => setShowResetConfirm(false)}
          onConfirm={handleResetConfirm}
          title="Are you sure?"
          message="Are you sure you want to reset?"
        />

      </div>
    </div>
        );

}
