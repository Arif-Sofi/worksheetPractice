# Project Guide: Interactive Rounding Worksheet

This guide outlines the tasks and concepts required to build the interactive "Rounding Off to Nearest 10" worksheet using React, Next.js, and Tailwind CSS.

## 1. Task Breakdown

### Phase 1: Data Modeling
Before coding UI, define the data structure. You need an array of question objects.
- **Task**: Create a `data/questions.ts` (or similar) to store the worksheet content.
- **Fields**: Each question needs an ID, the problem text (e.g., "17 rounded off..."), options (a, b, c), and the correct answer index.

### Phase 2: UI Structure (Atomic Components)
Break the UI into reusable pieces.
- **Task**: Build the `Layout` (Header, Main, Footer).
- **Task**: Create a `QuestionCard` component to render individual questions.
- **Task**: Build the `NameInput` and `ActionButtons` (Submit/Reset).

### Phase 3: State & Logic
This is where the interactivity happens.
- **Task**: Manage the user's name in state.
- **Task**: Track selected answers for each question.
- **Task**: Implement the `Submit` logic: validate name, calculate score, and show results.
- **Task**: Implement the `Reset` logic: clear selections and name.

### Phase 4: Styling & Responsiveness
- **Task**: Use Tailwind CSS to replicate the "clean worksheet" look.
- **Task**: Ensure the grid layout adjusts for mobile (e.g., 2 columns on desktop, 1 on mobile).
- **Task**: Add "active" styles for selected answers (e.g., a circle or highlight).

---

## 2. Core Concepts & Primitive Examples

### A. State Management (`useState`)
State allows your application to "remember" user input.

```tsx
import { useState } from 'react';

function NameField() {
  const [name, setName] = useState('');

  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Enter Name"
    />
  );
}
```

### B. List Rendering (`map`)
Instead of hardcoding 12 questions, use an array and map through it.

```tsx
const questions = [
  { id: 1, text: "17 rounded to 10", options: ["10", "20", "17"] },
  // ... more
];

function QuestionList() {
  return (
    <div>
      {questions.map((q) => (
        <div key={q.id}>{q.text}</div>
      ))}
    </div>
  );
}
```

### C. Dynamic Styling (Tailwind)
Apply different classes based on whether an option is selected.

```tsx
function Option({ isSelected, label }) {
  return (
    <button className={`p-2 border rounded-full ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'}`}>
      {label}
    </button>
  );
}
```

### D. Form Validation & Logic
Prevent submission if the name is missing.

```tsx
const handleSubmit = () => {
  if (!name.trim()) {
    alert("Please enter your name first!");
    return;
  }
  // Calculate score...
};
```

---

## 3. Recommended Data Structure

To make your life easier, model your questions like this:

```typescript
export const questions = [
  {
    id: 1,
    question: "17 rounded off to the nearest 10 is..",
    options: ["10", "20", "17"],
    correctAnswer: 1, // index of "20"
  },
  // ... rest of the 12 questions
];
```

## 4. Design Tips
- **Typography**: Use a clean sans-serif font like Inter (default in Next.js).
- **Spacing**: Use `space-y-8` or `gap-8` to give the questions breathing room.
- **Interactive Feedback**: When a user clicks an option, give immediate visual feedback (e.g., a "circled" look).
- **Score Display**: Use a modal or a clear section at the top that appears only after submission.
