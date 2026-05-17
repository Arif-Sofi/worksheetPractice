import React from "react";

export default function Header() {
  return (
    // Tailwind: text-3xl (size), font-bold, text-center, border-b-2 (bottom border), pb-3 (padding-bottom), mb-6 (margin-bottom)
    <header className="bg-gray-100 rounded-4xl text-3xl font-bold text-center  p-3 mb-6">
      <h1>Rounding Off to Nearest 10</h1>
    </header>
  );
}
