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
    ...answers, // Keep previous answers
    [questionId]: optionIndex // Add/Update the new one
  });
};
```

## 3. Passing Functions as Props (Callbacks)
To make a button inside `QuestionCard` update the state in `page.tsx`, you pass a function down.

### Example:
```tsx
// WorksheetQuestions.tsx
{questions.map((q) => (
  <QuestionCard 
    key={q.id} 
    question={q} 
    isSelected={answers[q.id] === someIndex}
    onSelect={(index) => handleSelect(q.id, index)}
  />
))}
```

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
