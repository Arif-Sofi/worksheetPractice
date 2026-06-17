# Phase 3: State & Logic - Concept Guide

In Phase 3, you move from a **static** UI to a **functional** application. The biggest challenge is making different components (like the Name Input and the Question Cards) talk to each other.

## 1. Lifting State Up
Currently, your `NameInput` handles its own state. But when the user clicks the `Submit` button in the footer, the footer doesn't know what the name is!

**Concept**: Move the state to the closest common parent (in your case, `page.tsx`).

### Example:
```tsx
// In page.tsx (The Parent)
export default function WorksheetPage() {
  const [name, setName] = useState('');

  return (
    <div>
      <NameInput value={name} onChange={(newName) => setName(newName)} />
      <SubmitButton name={name} />
    </div>
  );
}

// In NameInput.tsx (The Child)
export default function NameInput({ value, onChange }) {
  return (
    <input 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  );
}
```

## 2. Managing Multiple Answers
You have 12 questions. You need to "remember" which option was picked for each one. A good way to do this is using an **Object** where the `key` is the Question ID and the `value` is the selected index.

### Example:
```tsx
// State structure in page.tsx
const [answers, setAnswers] = useState<{ [key: number]: number }>({});

// Function to update an answer
const handleSelect = (questionId: number, optionIndex: number) => {
  setAnswers({
    ...answers, // Concept A: Spread Operator
    [questionId]: optionIndex // Concept B: Computed Property Name
  });
};
```

### Concept Deep Dive:

#### A. The Spread Operator (`...`)
In React, you **cannot** modify state directly (e.g., `answers[1] = 2` is a "no-no"). You must always create a **new** copy of the data. The spread operator `...` says: *"Take everything currently inside the 'answers' object and copy it here."*

**Simple Example:**
```javascript
const fruits = { apple: 1, banana: 2 };
const newFruits = { ...fruits, orange: 3 }; 
// Result: { apple: 1, banana: 2, orange: 3 }
```

#### B. Computed Property Names (`[key]: value`)
When you want to use a variable (like `questionId`) as the name of a key in an object, you wrap it in square brackets `[]`. Without the brackets, JS would literally try to find a key named "questionId" instead of the number it represents.

**Simple Example:**
```javascript
const keyName = "color";
const car = { [keyName]: "red" }; 
// Result: { color: "red" }
```

#### C. TypeScript Object Mapping (`{ [key: number]: number }`)
This tells TypeScript exactly what our "dictionary" looks like:
- **`key: number`**: Our question IDs (1, 2, 3...) are numbers.
- **`value: number`**: Our selected options (0, 1, 2) are also numbers.

**Visualizing the State:**
After answering Question 1 (option B) and Question 5 (option A), your `answers` state will look like this:
```javascript
{
  1: 1, // Question 1 -> Option Index 1 (B)
  5: 0  // Question 5 -> Option Index 0 (A)
}
```


## 3. Passing Functions as Props (Callbacks)
To make a button inside `QuestionCard` update the state in `page.tsx`, you pass a function down.

### Example:
```tsx
// 1. In page.tsx (Parent)
const handleSelect = (qId: number, optIdx: number) => { ... };

<QuestionCard 
  question={q} 
  onSelect={(index) => handleSelect(q.id, index)} 
/>

// 2. In QuestionCard.tsx (Child)
export default function QuestionCard({ question, onSelect }) {
  return (
    <button onClick={() => onSelect(0)}>
      Option A
    </button>
  );
}
```

### Concept Deep Dive: The "Remote Control" Analogy

In React, data only flows **down** (from Parent to Child). A child cannot "reach up" and change the parent's state directly. To fix this, we use a **Callback**.

Think of it like a **TV and a Remote Control**:
1.  **The TV (Parent)** holds the actual power and the "Current Channel" (State).
2.  **The Remote (Child)** doesn't have a screen or a tuner; it just has buttons.
3.  The TV "gives" the Remote a specific instruction: *"When this button is pressed, tell me to change the channel."*

#### Why use `() => onSelect(index)`?
You might wonder why we don't just write `onClick={onSelect(index)}`.
*   **`onSelect(index)`**: This runs the function **immediately** when the page loads.
*   **`() => onSelect(index)`**: This creates a "wrapper." It says: *"Wait until the user actually clicks this, THEN run the function."*

#### Simple Example:
Imagine a `Counter` parent and a `PlusButton` child:

```tsx
// Parent
function Counter() {
  const [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);

  return <PlusButton clickMe={addOne} />; // Passing the function
}

// Child
function PlusButton({ clickMe }) {
  return <button onClick={clickMe}>+</button>; // Using the function
}
```

**Visualizing the Flow:**
1. User clicks button in `QuestionCard`.
2. `QuestionCard` runs the function it was given (`onSelect`).
3. That function "wakes up" the code in `page.tsx` (`handleSelect`).
4. `page.tsx` updates its state, and the whole screen refreshes to show the change!


## 4. Calculating the Score
When `Submit` is clicked, you compare the user's `answers` with the `correctAnswer` in your data.

### Example:
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

## 5. Resetting Everything
Resetting is just setting all state back to its initial value.

### Example:
```tsx
const handleReset = () => {
  setName('');
  setAnswers({});
  setScore(null);
};
```

---
**Next Steps**: 
1. Open `src/app/page.tsx` and define the state variables.
2. Update `NameInput` to accept props instead of having its own `useState`.
3. Update `QuestionCard` to handle clicks and show which option is "active".
