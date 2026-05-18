import "./globals.css";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Rounding Worksheet",
  description: "Interactive Math Worksheet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-gray-50 min-h-screen text-slate-900">
        {/* TASK: You can add a global Navigation or Header here if needed */}
        {children}
      </body>
    </html>
  );
}
