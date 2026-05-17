import React from "react"; // Importing React.

/**
 * COMPONENT: Copyright
 * A simple footer component for legal/source information.
 */
export default function Copyright() {
  return (
  // Tailwind: mt-12 (margin-top), pt-6 (padding-top), border-t (top border)
    <footer className="mt-12 pt-6 border-t border-gray-200 text-center">
      <p className="text-xs text-gray-500">
        copyright:{" "}
        {/* Links should always have rel="noopener noreferrer" for security when using target="_blank" */}
        <a 
          href="http://www.mathinenglish.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          www.mathinenglish.com
        </a>
      </p>
    </footer>
  );
}