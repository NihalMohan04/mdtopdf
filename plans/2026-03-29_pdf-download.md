# Plan: PDF Download Button

## Date: 2026-03-29

## Objective
Create the DownloadButton component that generates and downloads PDF from the preview content.

## File Location
`src/components/DownloadButton.jsx`

## Component Features

### 1. PDF Generation
- Convert preview HTML to PDF using `html2pdf.js`
- Configurable margins, page size, orientation

### 2. Download Options
- Default filename: `document.pdf`
- A4 page size
- Portrait orientation
- 1-inch margins

## Props Interface
```jsx
interface DownloadButtonProps {
  filename?: string;
}
```

## Implementation Structure
```jsx
import html2pdf from 'html2pdf.js';

function DownloadButton({ filename = 'document.pdf' }) {
  const handleDownload = () => {
    const element = document.getElementById('preview');
    const opt = {
      margin: 1,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      },
    };
    
    html2pdf()
      .set(opt)
      .from(element)
      .save();
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      Download PDF
    </button>
  );
}
```

## Key Considerations

### Image Handling
- Ensure images are loaded before PDF generation
- Show loading indicator during generation

### CSS for Print
- Apply `page-break-*` properties for better pagination
- Ensure code highlighting styles are captured

## Acceptance Criteria
- [ ] PDF downloads on button click
- [ ] Generated PDF matches preview styling
- [ ] Code highlighting visible in PDF
- [ ] Images render correctly in PDF
- [ ] Proper page breaks

## Estimated Time
45-60 minutes