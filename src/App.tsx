import React from "react";
import { jsPDF } from "jspdf";

const PdfGenerator = () => {
  const generatePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addHeader = (doc:any, pageNumber:number) => {
      doc.setFontSize(10); // Set font size for the header
      doc.setTextColor(100); // Set text color for the header
      doc.text(`Header Title - Page ${pageNumber}`, 20, 20); // Add header text (x: 20, y: 20)
    };
  
    let pageNumber = 1;

    // Get the HTML content
    const content = document.getElementById("content-to-pdf") as HTMLElement;

    // Use jsPDF's html method to convert HTML to PDF
    doc.html(content, {
      margin: [30, 10, 20, 10], // top, left, bottom, right margins
      x: 10, // Adjust horizontal positioning
      y: 10, // Adjust vertical positioning
      async callback(doc) {
        const pageCount = doc.internal.getNumberOfPages(); // Get total pages
      for (pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
        doc.setPage(pageNumber); // Navigate to the correct page
        addHeader(doc, pageNumber); // Add header to the page
      }
        await doc.save("document.pdf");
      },
      autoPaging: "text", // Automatically handles content split across pages
      width: doc.internal.pageSize.getWidth() - 20, // Adjust content width to fit within margins
      windowWidth: 800, // Ensure proper scaling
    });
  };

  return (
    <div>
      <div id="content-to-pdf">
        <h1 style={{ fontSize: "20px" }}>
          Hello, this is the content to be converted to PDF!
        </h1>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
        <p style={{ fontSize: "20px", textWrap: "wrap" }}>
          Sure! Below is the full code for generating a PDF with proper margins
          and preventing rows from being cut in half. I've added the necessary
          CSS and the ReportTemplate component as well.
        </p>
      </div>
      <button onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;
