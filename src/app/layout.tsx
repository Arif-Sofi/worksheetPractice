import "./globals.css";

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
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-slate-900">
        {/* TASK: You can add a global Navigation or Header here if needed */}
        {children}
      </body>
    </html>
  );
}
