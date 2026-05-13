"use client";

import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { worksheetQuestions } from "./data/questions";
import NameInput from "./components/NameInput";
import ScoreDisplay from "./components/ScoreDisplay";
import SubmitButton from "./components/SubmitButton";
import ResetButton from "./components/ResetButton";
import CopyrightInfo from "./components/CopyrightInfo";
import WorksheetQuestions from "./components/WorksheetQuestions";
// TASK: Import your worksheetQuestions data here

export default function WorksheetPage() {
  // --- STATE ---
  // TASK: Create state for the student's name (string)
  // TASK: Create state for the answers (an object or array to track selections)
  // TASK: Create state for the final score (number or null)

  // --- LOGIC ---
  // TASK: Create a handleReset function to clear all inputs
  // TASK: Create a handleSubmit function to calculate the score (validate name first!)

  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8">
      {/* 1. HEADER SECTION */}
      {/* TASK: Build the Header with Title, Name Input, and Score Display */}
      <section className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-center mb-4 bg-gray-100 text-black px-10 py-4 rounded-4xl">Rounding Off to Nearest 10</h1>
        {/* Add Name Input here */}
        <div className="flex flex-row justify-evenly">
          <NameInput />
          <ScoreDisplay />
        </div>
      </section>

      {/* 2. QUESTIONS GRID */}
      {/* TASK: Use .map() to loop through worksheetQuestions and render Question Cards */}
      <div className="flex flex-col">
        <h2 className="flex items-center justify-center">Select the correct answers.</h2>
        <WorksheetQuestions />
      </div>
    
      {/* 3. ACTIONS SECTION */}
      {/* TASK: Add Submit and Reset buttons */}
      <section className="mt-4 flex justify-evenly gap-4">
        {/* Buttons go here */}
        <ResetButton />
        <SubmitButton />
      </section>

      {/* 4. FOOTER */}
      {/* TASK: Add copyright information */}
      <CopyrightInfo/>
    </main>
  );
}
