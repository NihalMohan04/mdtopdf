import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MarkdownToPdf } from './MarkdownToPdf';
import './DownloadButton.css';

function DownloadButton({ content, filename = 'document.pdf' }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="download-wrapper">
      {!isReady ? (
        <button
          className="download-button"
          onClick={() => setIsReady(true)}
        >
          Download PDF
        </button>
      ) : (
        <PDFDownloadLink
          document={<MarkdownToPdf content={content} />}
          fileName={filename}
          className="download-button"
        >
          {({ loading }) => (loading ? 'Generating...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export { DownloadButton };