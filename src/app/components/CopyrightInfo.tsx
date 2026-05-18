import React from "react"; // Importing React.

/**
 * COMPONENT: Copyright
 * A simple footer component for legal/source information.
 */
export default function Copyright() {
  return (
  // Tailwind: mt-16 (margin-top), pt-8 (padding-top), border-t-2 (top border), border-dashed
    <footer className="mt-16 pt-8 border-t-2 border-dashed border-gray-200 text-center">
      <p className="text-sm text-black font-medium">
        copyright:
        {/* Links should always have rel="noopener noreferrer" for security when using target="_blank" */}
        <a 
          href="http://www.mathinenglish.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black hover:text-black hover:underline transition-colors ml-8"
        >
          www.mathinenglish.com
        </a>
      </p>
    </footer>
  );
}