import './App.css'
import { useState } from "react";
import { jsPDF } from "jspdf";

const App = () => {
  const [text, setText] = useState("");

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    
    // Set margins for top, bottom, left, and right
    const marginTop = 20;   // Top margin
    const marginLeft = 15;   // Left margin
    const marginRight = 15;  // Right margin
    const marginBottom = 0; // Bottom margin
    const pageWidth = doc.internal.pageSize.width; // Get page width
    const pageHeight = doc.internal.pageSize.height; // Get page height

    // Wrap text to fit within the page width minus left and right margins
    const wrappedText = doc.splitTextToSize(text, pageWidth - marginLeft - marginRight); // Subtract margins for text padding

    let currentY = marginTop; // Starting position for text

    // Line height for each line
    const lineHeight = 10;
    
    // Iterate over the wrapped text and add to the PDF
    wrappedText.forEach((line, index) => {
      // If the line exceeds the page height minus bottom margin, create a new page
      if (currentY + lineHeight > pageHeight - marginBottom) {
        doc.addPage(); // Add a new page
        currentY = marginTop; // Reset Y position to the top of the new page
      }

      // Add the line to the current page with left margin
      doc.text(line, marginLeft, currentY);
      currentY += lineHeight; // Move down for the next line
    });

    // Save the PDF
    doc.save("document.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Text to PDF Generator</h1>
      <textarea
        className="w-3/4 p-2 border border-gray-300 rounded mb-4"
        rows={10}
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={handleGeneratePDF}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default App;
