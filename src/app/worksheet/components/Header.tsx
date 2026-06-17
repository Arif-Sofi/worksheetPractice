import React from "react";

export default function Header() {
  return (
    // Tailwind: text-4xl (size), font-montserrat, text-primary, text-center, border-4 (border), rounded-3xl, p-6, mb-10, shadow-lg
    <header className="bg-white border-3 border-secondary rounded-3xl text-4xl md:text-5xl font-montserrat font-bold text-center text-black p-6 mb-10 transition-transform hover:scale-[1.01]">
      <h1>Rounding Off to Nearest 10</h1>
    </header>
  );
}
