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

## 4. Design Tips
- **Typography**: Use a clean sans-serif font like Inter (default in Next.js).
- **Spacing**: Use `space-y-8` or `gap-8` to give the questions breathing room.
- **Interactive Feedback**: When a user clicks an option, give immediate visual feedback (e.g., a "circled" look).
- **Score Display**: Use a modal or a clear section at the top that appears only after submission.
```

## 5. The Thought Process: How to Approach a Feature

When starting a new feature (like this worksheet), follow this "Inside-Out" workflow. It ensures you don't build a beautiful UI that can't actually handle the data it needs.

### Step 1: Data Modeling (The "Brain")
**Why first?** If you don't know what your data looks like, your UI will be "dumb" and hard to refactor later.
- **Action**: Define the "Schema". For this project, a question isn't just text; it's an object with an ID, choices, and a solution.
- **Goal**: Have a `mockData.ts` file ready before you write a single `<div>`.

### Step 2: Component Architecture (The "Skeletal System")
**Why?** Don't write one giant file. Break it down into small, manageable pieces.
- **Action**: Draw boxes around the `example.png`. 
    - Top box = `Header`
    - Middle box = `WorksheetGrid`
    - Small box inside grid = `QuestionCard`
    - Bottom box = `Footer`
- **Goal**: Create empty component files that just return `<div>Component Name</div>`.

### Step 3: Static UI (The "Skin")
**Why?** Get the look right using your mock data, but don't worry about "clicks" yet.
- **Action**: Use Tailwind to layout the components. Pass your mock data into the components as **Props**.
- **Goal**: The app looks exactly like the image, but buttons don't do anything yet.

### Step 4: Logic & Interactivity (The "Nervous System")
**Why?** Now that it looks right, make it "alive".
- **Action**: Add `useState`. 
    - "Where should the state live?" -> Usually at the highest common parent (e.g., `page.tsx`) so it can share data between the list and the submit button.
- **Goal**: Clicking an option updates the state. Typing in the name updates the state.

### Step 5: Validation & Feedback (The "Reflexes")
**Why?** Handle the "What if?" scenarios.
- **Action**: 
    - "What if they don't enter a name?" -> Show an error.
    - "What if they click submit?" -> Calculate score and change the UI to show the result.
- **Goal**: A fully functional, "bulletproof" feature.

## 6. Tailwind CSS for Flutter Developers

If you are coming from Flutter, think of Tailwind classes as the parameters you pass into your Widgets. In Web development, we use **Flexbox** to achieve almost everything you do with `Row` and `Column`.

### Layout Equivalents

| Flutter Widget | Tailwind Equivalent (Flexbox) | Description |
| :--- | :--- | :--- |
| `Column()` | `flex flex-col` | Aligns children vertically. |
| `Row()` | `flex flex-row` | Aligns children horizontally (default for `flex`). |
| `Container()` | `div` with `p-4 m-2 bg-white` | A box with padding, margin, and background. |
| `SizedBox(height: 10)` | `h-2.5` or `space-y-2.5` | Fixed height or vertical spacing between items. |
| `Padding()` | `p-4` (all), `px-4` (horizontal) | Adds internal space. |
| `Center()` | `flex items-center justify-center` | Centers child both vertically and horizontally. |
| `Expanded()` | `flex-1` | Tells the child to take up all remaining space. |

### Common Layout Combinations

**1. The "Column" with Spacing (Main Worksheet Container)**
In Flutter, you'd use `Column(children: [...], mainAxisAlignment: MainAxisAlignment.start)`.
```html
<div class="flex flex-col gap-8 p-6">
  <!-- Your Header, Questions, and Footer go here -->
</div>
```

**2. The "Row" for Options**
For the `a. 10`, `b. 20` choices, you want them aligned horizontally or vertically.
```html
<!-- Vertical list of options like a Column -->
<div class="flex flex-col gap-2">
  <button class="text-left">a. 10</button>
  <button class="text-left">b. 20</button>
</div>
```

**3. The "Container" (Question Card)**
Equivalent to a `Container` with `BoxDecoration`.
```html
<div class="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
  <p class="font-bold text-lg">17 rounded off...</p>
</div>
```

### Alignment Cheatsheet

| Flutter Property | Tailwind Class |
| :--- | :--- |
| `MainAxisAlignment.center` | `justify-center` |
| `MainAxisAlignment.spaceBetween` | `justify-between` |
| `CrossAxisAlignment.center` | `items-center` |
| `CrossAxisAlignment.start` | `items-start` |

---

## 7. Phase 3: Detailed State & Logic Examples

In Phase 3, you move from a **static** UI to a **functional** application. The biggest challenge is making different components (like the Name Input and the Question Cards) talk to each other.

### A. Lifting State Up
Currently, your `NameInput` handles its own state. But when the user clicks the `Submit` button in the footer, the footer doesn't know what the name is!

**Concept**: Move the state to the closest common parent (in your case, `page.tsx`).

**Example implementation in `page.tsx`**:
```tsx
export default function WorksheetPage() {
  const [name, setName] = useState('');

  return (
    <div>
      <NameInput value={name} onChange={(newName) => setName(newName)} />
      <SubmitButton name={name} />
    </div>
  );
}
```

### B. Managing Multiple Answers
You have 12 questions. You need to "remember" which option was picked for each one. Use an **Object** where the `key` is the Question ID and the `value` is the selected index.

**Example state structure**:
```tsx
const [answers, setAnswers] = useState<{ [key: number]: number }>({});

// Function to update an answer
const handleSelect = (questionId: number, optionIndex: number) => {
  setAnswers({
    ...answers, 
    [questionId]: optionIndex 
  });
};
```

### C. Calculating the Score
When `Submit` is clicked, compare the user's `answers` with the `correctAnswer` in your `data/questions.ts`.

**Example Logic**:
```tsx
const handleSubmit = () => {
  if (!name.trim()) {
    alert("Please enter your name!");
    return;
  }

  let newScore = 0;
  worksheetQuestions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) {
      newScore += 1;
    }
  });

  setScore(newScore);
};
```

### D. Resetting Everything
Resetting is just setting all state back to its initial value.

```tsx
const handleReset = () => {
  setName('');
  setAnswers({});
  setScore(null);
};
```

## 8. Beginner-Friendly Phase 3: Simplified Explanations

If the code above looks a bit confusing, here is a "Beginner Method" to understand the exact same concepts using analogies.

### A. The "Photocopy" Method (Spread Operator `...`)
In React, you cannot change the original "Answers" list directly. You must make a copy first.

**The Step-by-Step Way:**
```javascript
const handleSelect = (questionId, optionIndex) => {
  // 1. Photocopy the old answers into a new variable
  const newAnswers = { ...answers };

  // 2. Change the specific answer on our new copy
  newAnswers[questionId] = optionIndex;

  // 3. Tell React to use our new copy as the truth
  setAnswers(newAnswers);
};
```

### B. The "Variable Label" Method (Computed Property `[key]`)
When you use `[questionId]`, you are telling JavaScript: *"Don't use the word 'questionId' as the label. Look at the number INSIDE the questionId variable and use that instead."*

### C. The "Remote Control" Method (Callbacks)
Passing a function like `onSelect` to a child component is like giving them a **Remote Control**.
- The **TV (Parent)** holds the power.
- The **Remote (Child)** has the buttons.
- When the Child presses a button, it sends a signal back to the Parent to change the channel (update the state).

### D. The "Boss & Worker" Method (Lifting State Up)
- The **Boss (page.tsx)** holds the only copy of the "Worksheet Data."
- The **Worker (NameInput.tsx)** doesn't have its own data. It just shows what the Boss tells it to show and reports back when the user types something.


