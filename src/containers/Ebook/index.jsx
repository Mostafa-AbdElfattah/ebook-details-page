import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";

import "./Ebook.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const books = [
  { title: "Book 1", pdf: "/pdf/fitabc.pdf", pages: 122 },
  { title: "Book 2", pdf: "/pdf/fitabc.pdf", pages: 122 },
];

const Ebook = () => {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(24);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleAccordionChange = (book) => {
    setSelectedBook(book);
    setPageNumber(24);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://3.65.32.166/api/v2/storefront/products/38";
        const token =
          "eyJhbGciOiJIUzI1NiJ9.eyJhdXRoZW50aWNhYmxlX2lkIjo5LCJhdXRoZW50aWNhYmxlX3R5cGUiOiJTcHJlZTo6VXNlciIsImRldmljZSI6MTQzLCJjcmVhdGVkX2F0IjoxNjczODcxNTA5LCJleHAiOjQ4Mjk1NjY3MDl9.PlNelre_ehGa3GruTipCZx1PxkTrHbkxp61ozwIqf9g";

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // Add other headers if needed
          },
        });

        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="page-container">
      <h1>{data?.data.attributes.name}</h1>

      <div className="book-preview-container">
        <Grid container spacing={3}>
          {/* Left Side - Menu with Accordions */}
          <Grid item xs={4}>
            {books.map((book, index) => (
              <Accordion
                key={index}
                expanded={selectedBook === book}
                onChange={() => handleAccordionChange(book)}
              >
                <AccordionSummary>
                  <Typography>{book.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Pages: {book.pages}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Right Side - Display PDF */}
          <Grid item xs={8}>
            {selectedBook && (
              <div>
                <Document
                  file={selectedBook.pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Ebook;
