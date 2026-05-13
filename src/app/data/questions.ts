export interface Question {
    id: number;
    question: string;
    options: Array<string>;
    correctAnswer: number; //index of the correct option
}

export const worksheetQuestions: Array<Question> = [
    {
        id: 1,
        question: "17 rounded off to the nearest 10 is..",
        options: ["10", "20", "17"],
        correctAnswer: 1,
    },
    {
        id: 2,
        question: "75 rounded off to the nearest 10 is..",
        options: ["70", "80", "175"],
        correctAnswer: 1,
    },
    {
        id: 3,
        question: "64 rounded off to the nearest 10 is..",
        options: ["64", "70", "60"],
        correctAnswer: 2,
    },
    {
        id: 4,
        question: "98 rounded off to the nearest 10 is..",
        options: ["80", "100", "89"],
        correctAnswer: 1,
    },
    {
      id: 5,
       question: "94 rounded off to the nearest 10 is..",
      options: ["100", "94", "90"],
      correctAnswer: 2,
    },
    {
      id: 6,
      question: "445 rounded off to the nearest 10 is..",
      options: ["450", "440", "500"],
      correctAnswer: 0,
    },
    {
      id: 7,
      question: "45 rounded off to the nearest 10 is..",
      options: ["50", "45", "40"],
      correctAnswer: 0,
    },
    {
      id: 8,
      question: "19 rounded off to the nearest 10 is..",
      options: ["20", "10", "19"],
      correctAnswer: 0,
    },
    {
      id: 9,
      question: "0 rounded off to the nearest 10 is..",
      options: ["10", "1", "0"],
      correctAnswer: 2,
    },
    {
      id: 10,
      question: "199 rounded off to the nearest 10 is..",
      options: ["190", "100", "200"],
      correctAnswer: 2,
    },
    {
      id: 11,
      question: "165 rounded off to the nearest 10 is..",
      options: ["160", "170", "150"],
      correctAnswer: 1,
    },
    {
      id: 12,
      question: "999 rounded off to the nearest 10 is..",
      options: ["990", "1,000", "909"],
      correctAnswer: 1,
    },
];