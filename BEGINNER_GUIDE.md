# Phase 3: A Beginner's Guide to React Logic

If the code in the Phase 3 guide looks a bit "alien," don't worry! React uses some JavaScript "shortcuts" that can be confusing at first. This guide breaks them down into simple, step-by-step explanations.

---

## 1. Lifting State Up (The "Boss & Worker" Analogy)

In React, data only flows **down**. Imagine a restaurant:
- **The Boss (Parent Component - `page.tsx`)** holds the "Order List" (State).
- **The Waiter (Child Component - `NameInput.tsx`)** is the one talking to the customer.

The Waiter doesn't have their own "Order List." When a customer gives a name, the Waiter has to shout back to the Boss to update the list.

### The Beginner Way:
Instead of magic, think of it as two things being passed from Boss to Waiter:
1.  **The Current Value**: "Hey Waiter, here is what is currently on the list."
2.  **The Permission to Change it**: "Hey Waiter, here is a phone. Call me if the customer says something new."

```tsx
// 1. The Boss (page.tsx)
const [name, setName] = useState(''); // The Boss holds the paper

<NameInput 
  value={name}                // Passing the current value
  onChange={(n) => setName(n)} // Giving the Waiter a "phone" to call back
/>

// 2. The Waiter (NameInput.tsx)
export default function NameInput({ value, onChange }) {
  return (
    <input 
      value={value}           // Looking at the Boss's paper
      onChange={(e) => {
        const newValue = e.target.value;
        onChange(newValue);   // Calling the Boss with the new info
      }} 
    />
  );
}
```

---

## 2. The Spread Operator `...` (The "Photocopy" Analogy)

In React, you are **never allowed** to change the original state directly. 
`answers[1] = 2` is like trying to erase ink with your finger—it makes a mess!

Instead, you must **make a copy**.

### The Shortcut Way (Confusing):
```javascript
setAnswers({ ...answers, [id]: val });
```

### The Beginner Way (Step-by-Step):
Think of it as a 3-step process at a photocopy machine:

```javascript
const handleSelect = (questionId, optionIndex) => {
  // STEP 1: Make a perfect photocopy of the old answers
  // The "..." means "take everything out of the old box and put it in this new box"
  const copyOfOldAnswers = { ...answers };

  // STEP 2: On our NEW copy, change the one thing we want
  // (This is safe because it's a copy!)
  copyOfOldAnswers[questionId] = optionIndex;

  // STEP 3: Tell React to throw away the old paper and use our new copy
  setAnswers(copyOfOldAnswers);
};
```

---

## 3. Computed Property Names `[key]` (The "Variable Label" Analogy)

Why do we use `[questionId]` instead of just `questionId`?

Imagine you have a box and a stack of labels.
- If you write `questionId: 1`, JavaScript thinks the label is **literally** the word "questionId".
- If you write `[questionId]: 1`, JavaScript looks **inside** the variable `questionId`. If `questionId` is `5`, the label becomes `"5"`.

**Example:**
```javascript
const myLabel = "favoriteColor";

const car = {
  [myLabel]: "Blue" // This becomes { favoriteColor: "Blue" }
};
```

---

## 4. Callbacks (The "Remote Control" Analogy)

How does a button in a `QuestionCard` tell the main `page.tsx` what was clicked?

Think of it like giving someone a **Remote Control** where the "Channel Up" button is already programmed to call a specific function.

### The Step-by-Step Code:

```tsx
// In page.tsx (Parent)
// We create the "Instructions"
const tellTheBossWhatWasPicked = (id, choice) => {
   console.log("Question", id, "was set to", choice);
};

// We pass those instructions down, but we "pre-fill" the Question ID
<QuestionCard 
   onSelect={(choice) => tellTheBossWhatWasPicked(q.id, choice)} 
/>
```

Inside `QuestionCard`, when the user clicks a button:
1. The button runs `onSelect(0)`.
2. That "remote control" signal travels up to `page.tsx`.
3. `page.tsx` runs `tellTheBossWhatWasPicked(q.id, 0)`.

---

## 5. TypeScript: The Rulebook (Interfaces)

If you see **red squiggles** on your props like `({ value, onChange })`, it's because TypeScript is worried! It's saying: *"I don't know what these things are. Is 'value' a number? A string? A list of cats? I need a rulebook!"*

To fix this, we create an **Interface**. Think of it as a contract that says exactly what data the component is allowed to receive.

### The Fix for `NameInput.tsx`:

```tsx
// 1. Create the Rulebook (The Interface)
interface NameInputProps {
  value: string;               // value MUST be a string
  onChange: (n: string) => void; // onChange MUST be a function that takes a string
}

// 2. Tell the component to follow the Rulebook
export default function NameInput({ value, onChange }: NameInputProps) {
  // ... your code
}
```

**Why do this?**
If you accidentally try to pass a **number** into the `value` prop later, TypeScript will give you a red squiggle *before* you even run the app. It's like having a helpful assistant checking your work as you type!

---

## 6. TypeScript: The Labeled Box (Generics)

Usually, you see `useState('')` or `useState(0)`. In those cases, TypeScript is smart enough to "guess" that you want a string or a number.

But when you start with an **empty object** `useState({})`, TypeScript gets scared. It doesn't know what you plan to put in that object later. It could be names, prices, or a list of pizza toppings!

To fix this, we use the **Angle Brackets `< >`** to put a label on the box.

### Breaking down the code:
`useState<{ [key: number]: number }>({})`

1.  **`useState`**: The box that holds our data.
2.  **`{ }`**: The box is currently empty.
3.  **`< ... >`**: The **Label** we stick on the outside of the box.

### What the Label says:
Inside the `< >`, we wrote `{ [key: number]: number }`. This is a secret code that tells TypeScript:
- **`[key: number]`**: "The labels inside this object (the Question IDs) will always be **numbers**."
- **`: number`**: "The values (the selected options) will also always be **numbers**."

**In plain English:** "This is a dictionary where both the keys and the values are numbers."

---

## 7. The Two Personalities of the Colon (:)

You've noticed that `:` is used in two different ways. To keep them straight, remember the **"Recipe vs. Meal"** rule:

### Personality 1: The Recipe (Defining a Type)
When you are telling TypeScript what *kind* of data something **should** be, you are writing a recipe.
*   **Where?** Inside an `interface`, after a variable name in a function, or **inside `< >`**.
*   **Example:** `name: string`
*   **Meaning:** "The variable `name` MUST follow the `string` rule."

### Personality 2: The Meal (Assigning a Value)
When you are actually *creating* an object with real data, you are making the meal.
*   **Where?** Inside an object `{ }`.
*   **Example:** `const person = { name: "Arif" }`
*   **Meaning:** "Set the property `name` to the actual text `"Arif"`."

### How to tell the difference?
The easiest way to know is to look at **where** you are:

1.  **Inside Angle Brackets `< >`?**
    It is **ALWAYS** a Type (Personality 1). You are just giving TypeScript the "Recipe" for the state.
    *   *Example:* `useState< { id: number } >` (Rule: IDs must be numbers).

2.  **Inside standard Curly Brackets `{ }`?**
    It is **USUALLY** a Value (Personality 2). You are setting real data.
    *   *Example:* `setAnswers({ 1: 0 })` (Fact: Question 1 is set to Option 0).

**The Only Exception:**
Inside an `interface`, curly brackets `{ }` are used to write the "Recipe." But since `interface` is always about rules, you'll know it's Personality 1!

---

## 8. Implementation: Step-by-Step Code

Here is how you can apply all these concepts to your specific files.

### 1. `src/app/page.tsx` (The Boss)
Update your `page.tsx` to handle the Reset and Submit logic.

```tsx
export default function WorksheetPage() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const handleSelect = (questionId: number, optionIndex: number) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleReset = () => {
    setName('');
    setAnswers({});
    setFinalScore(null);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name first!");
      return;
    }
    
    let score = 0;
    worksheetQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setFinalScore(score);
  };

  return (
    <main>
      <NameInput value={name} onChange={setName} />
      
      {/* Pass the answers and the selection function */}
      <WorksheetQuestions answers={answers} onSelect={handleSelect} />

      <section>
        <ActionButton onClick={handleReset}>Reset</ActionButton>
        <ActionButton onClick={handleSubmit}>Submit</ActionButton>
      </section>
      
      {/* Optional: Show score if it's not null */}
      {finalScore !== null && <p>Your Score: {finalScore} / 12</p>}
    </main>
  );
}
```

### 2. `src/app/components/WorksheetQuestions.tsx` (The Middle Man)
This component's job is to pass data from the Boss to the Workers.

```tsx
interface WorksheetQuestionsProps {
  answers: { [key: number]: number };
  onSelect: (qId: number, optIdx: number) => void;
}

export default function WorksheetQuestions({ answers, onSelect }: WorksheetQuestionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {worksheetQuestions.map((question) => (
        <QuestionCard 
          key={question.id} 
          question={question} 
          // Tell the card which option is currently picked
          selectedAnswer={answers[question.id]} 
          // Pass the "remote control" function
          onSelect={(index) => onSelect(question.id, index)} 
        />
      ))}
    </div>
  );
}
```

### 3. `src/app/components/QuestionCard.tsx` (The Worker)
This component shows the question and highlights the selected button.

```tsx
interface QuestionCardProps {
    question: Question;
    selectedAnswer: number | undefined; // NEW: To know which is picked
    onSelect: (n: number) => void;
}

export default function QuestionCard({ question, selectedAnswer, onSelect }: QuestionCardProps) {
    return (
        <div className="p-4 border rounded"> 
            <div>{question.id}. {question.question}</div>

            <div className="flex flex-col gap-2 p-2">
                {question.options.map((option, index) => {
                    // Check if THIS button is the one the user picked
                    const isSelected = selectedAnswer === index;

                    return (
                        <button 
                            key={index} 
                            onClick={() => onSelect(index)} 
                            // If isSelected is true, change the color!
                            className={`text-left p-2 rounded ${
                                isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                            }`}
                        >
                            {String.fromCharCode(97 + index)}. {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
```

---

## Summary for Beginners

| Concept | Simple Definition |
| :--- | :--- |
| **Lifting State** | Moving data to the "Boss" (Parent) so everyone can see it. |
| **Props** | Data or "Remote Controls" passed from Parent to Child. |
| **Spread `...`** | Making a photocopy of your data so you can change it safely. |
| **`[key]`** | Using a variable as a name for a piece of data. |
| **Callback** | A function passed to a child that "calls back" to the parent when something happens. |
