interface Option {
  label: string; // The text displayed to the user (e.g., "a. 20").
  value: string; // The internal value used for logic (e.g., "20").
}

export interface Question {
  id: number; // Unique identifier for the question.
  text: string; // The question content/text.
  options: Option[]; // Array of possible choices for the user.
  correctAnswer: string; // The value that represents a correct answer.
}

export const WORKSHEET_DATA: Question[] = [
  { 
    id: 1, 
    text: "17 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 10", value: "10" }, 
      { label: "b. 20", value: "20" }, 
      { label: "c. 17", value: "17" }
    ], 
    correctAnswer: "20" 
  },
  { 
    id: 2, 
    text: "45 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 50", value: "50" }, 
      { label: "b. 45", value: "45" }, 
      { label: "c. 40", value: "40" }
    ], 
      correctAnswer: "50" 
  },
  { 
    id: 3, 
    text: "75 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 70", value: "70" },
      { label: "b. 80", value: "80" }, 
      { label: "c. 175", value: "175" }
    ], correctAnswer: "80" 
  },
  { 
    id: 4, 
    text: "19 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 20", value: "20" }, 
      { label: "b. 10", value: "10" }, 
      { label: "c. 19", value: "19" }
    ], 
    correctAnswer: "20" 
  },
  { 
    id: 5, 
    text: "64 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 64", value: "64" }, 
      { label: "b. 70", value: "70" }, 
      { label: "c. 60", value: "60" }
    ], 
    correctAnswer: "60" 
  },
  { 
    id: 6, 
    text: "0 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 10", value: "10" }, 
      { label: "b. 1", value: "1" }, 
      { label: "c. 0", value: "0" }
    ], 
      correctAnswer: "0" 
  },
  { 
    id: 7, 
    text: "98 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 80", value: "80" }, 
      { label: "b. 100", value: "100" }, 
      { label: "c. 89", value: "89" }
    ], 
    correctAnswer: "100" 
  },
  { 
    id: 8, 
    text: "199 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 190", value: "190" }, 
      { label: "b. 100", value: "100" }, 
      { label: "c. 200", value: "200" }
    ], 
    correctAnswer: "200" 
  },
  { 
    id: 9, 
    text: "94 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 100", value: "100" }, 
      { label: "b. 94", value: "94" }, 
      { label: "c. 90", value: "90" }
    ], 
    correctAnswer: "90" 
  },
  { 
    id: 10, 
    text: "165 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 160", value: "160" }, 
      { label: "b. 170", value: "170" }, 
      { label: "c. 150", value: "150" }
    ], 
    correctAnswer: "170" 
  },
  { 
    id: 11, 
    text: "445 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 450", value: "450" }, 
      { label: "b. 440", value: "440" }, 
      { label: "c. 500", value: "500" }
    ], 
    correctAnswer: "450" 
  },
  { 
    id: 12, 
    text: "999 rounded off to the nearest 10 is..", 
    options: [
      { label: "a. 990", value: "990" }, 
      { label: "b. 1,000", value: "1000" }, 
      { label: "c. 909", value: "909" }
    ], 
    correctAnswer: "1000" 
  },
];
