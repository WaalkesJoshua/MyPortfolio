import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../slicers/resumeDataSlice';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [pageNumber, setPageNumber] = useState(1);
  const isError = useSelector((state) => state.resume.isError);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isError &&
        <h6>Error Loading Resume</h6>}
        <p>Test from Saturday</p>
      <Document
        file="../../../public/Joshua_Waalkes_Resume.pdf"
        onLoadError={() => {
          dispatch(setError(true));
        }}
      >
        <Page
          pageNumber={pageNumber}
          width={600}
          height={600}
          renderTextLayer={false} // Disable text layer
          renderAnnotationLayer={false} //Disable annotations
        />
      </Document>
      <embed
        style={{marginTop: "10px"}}
        src="../../../public/Joshua_Waalkes_Resume.pdf"
        width={600}
        height={800}
      >
        {/* <p>This should only show if embed tag fails</p> */}
      </embed>
    </ div>
  );
}