# Project Setup Guide: Interactive Educational Worksheet

This guide will walk you through setting up a professional development environment for your interactive worksheet project using **Next.js**, **React**, **TypeScript**, and **pnpm**.

## 1. Prerequisites

Before we begin, ensure you have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Install pnpm
`pnpm` is a fast and efficient package manager. Open your terminal (PowerShell or Command Prompt) and run:
```bash
npm install -g pnpm
```

## 2. Initialize the Project

We will use the standard Next.js initializer. Run the following command in your project folder (`worksheetPractice`):

```bash
pnpm create next-app@latest .
```

When prompted, choose the following options (use arrow keys and enter):
- **Would you like to use TypeScript?** Yes (Highly recommended for fewer bugs)
- **Would you like to use ESLint?** Yes (Helps keep code clean)
- **Would you like to use Tailwind CSS?** Yes (Makes styling much faster)
- **Would you like to use `src/` directory?** Yes (Keeps your project organized)
- **Would you like to use App Router?** Yes (The modern way to build Next.js apps)
- **Would you like to customize the default import alias?** No

## 3. Understanding the Technology Stack

### Why Next.js & React?
*   **React:** A library for building "Components" (like your Question component, Reset button, etc.).
*   **Next.js:** A framework built on top of React that handles things like routing (moving between pages) and optimization automatically.

### Why TypeScript?
*   TypeScript adds "types" to JavaScript. For example, it ensures that your `score` is always a `number` and not a `string`, which prevents many common errors before you even run the code.

### Why pnpm?
*   It saves disk space by sharing packages across projects and is much faster than standard `npm`.

## 4. Project Structure Overview

After initialization, you will see these key files:
- `src/app/page.tsx`: The main entry point for your worksheet. This is where you'll write most of your code.
- `src/app/layout.tsx`: The "wrapper" for your entire site (fonts, metadata).
- `package.json`: Lists your project dependencies and scripts.
- `tailwind.config.ts`: Configuration for your styling.
- `tsconfig.json`: Configuration for TypeScript.

## 5. Running Your Project

To see your project in action, run:
```bash
pnpm dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 6. Next Steps for Your Worksheet

Based on your `requirements.txt` and `example.png`, here is how you should approach the build:

1.  **Define your Data:** Create a list of questions in a TypeScript array.
2.  **Create Components:**
    *   `Header`: For the title ("Rounding Off...") and Name/Score inputs.
    *   `QuestionCard`: A reusable component for each math problem.
    *   `Controls`: For the Submit and Reset buttons.
3.  **Manage State:** Use React's `useState` to keep track of the user's name, their selected answers, and the final score.

---
*Created for the "Rounding Off to Nearest 10" Project.*
