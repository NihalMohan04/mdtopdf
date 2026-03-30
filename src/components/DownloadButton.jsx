import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MarkdownToPdf } from './MarkdownToPdf';
import './DownloadButton.css';

function DownloadButton({ content, font, filename = 'document.pdf' }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="download-wrapper">
      {!isReady ? (
        <button
          className="download-button"
          onClick={() => setIsReady(true)}
          aria-label="Prepare PDF download"
        >
          Download PDF
        </button>
      ) : (
        <PDFDownloadLink
          document={<MarkdownToPdf content={content} font={font} />}
          fileName={filename}
          className="download-button"
          aria-label="Download PDF file"
        >
          {({ loading, error }) => {
            if (error) {
              console.error('PDF generation error:', error);
              return 'Error — check console';
            }
            return loading ? (
              <span className="download-loading">
                <span className="spinner" />
                Generating...
              </span>
            ) : (
              'Download PDF'
            );
          }}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export { DownloadButton };