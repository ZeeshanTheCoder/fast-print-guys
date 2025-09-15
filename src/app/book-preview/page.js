"use client";

import { useEffect, useState, useRef, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PersonalIcon from "@/assets/images/newsletter.png";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { BASE_URL } from "@/services/baseUrl";
import Image from "next/image";

const API_BASE = `${BASE_URL}`;

const NavBar = ({ navigate }) => (
  <div
    className="w-full h-auto min-h-[51px] flex items-center justify-center gap-2 sm:gap-4 md:gap-8 px-2 sm:px-4 py-2"
    style={{
      background:
        "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)",
    }}
  >
    <span
      className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer pb-1 px-2 py-1 border-b-2 sm:border-b-4 border-transparent hover:border-yellow-400 transition-all text-center whitespace-nowrap"
      onClick={() => navigate("/start-project")}
    >
      Start Project
    </span>
    <span
      className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer pb-1 px-2 py-1 border-b-2 sm:border-b-4 border-transparent hover:border-yellow-400 transition-all text-center whitespace-nowrap"
      onClick={() => navigate("/design-project")}
    >
      Designs
    </span>
    <span
      className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer pb-1 px-2 py-1 border-b-2 sm:border-b-4 border-transparent hover:border-yellow-400 transition-all text-center whitespace-nowrap"
      onClick={() => navigate("/book-preview")}
    >
      Book Preview
    </span>
  </div>
);

let pdfjsLib = null;

const loadPdfLib = async () => {
  if (typeof window === "undefined") return null;
  if (pdfjsLib) return pdfjsLib;

  try {
    const lib = await import("pdfjs-dist");
    lib.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";
    pdfjsLib = lib;
    return lib;
  } catch (err) {
    console.error("Failed to load PDF.js:", err);
    throw new Error("PDF processor failed to initialize.");
  }
};

const BookPreview = () => {
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for PDF rendering
  const [pdfDataUrl, setPdfDataUrl] = useState(null);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPages, setCurrentPages] = useState([1, 2]);
  const [renderedPages, setRenderedPages] = useState([null, null]);

  // State for project/form data
  const [projectData, setProjectData] = useState(null);

  // Effect to load data from localStorage on component mount
  useEffect(() => {
    const savedPdfDataUrl = localStorage.getItem("previewPdfDataUrl");
    const savedProjectData = localStorage.getItem("previewProjectData");

    if (savedPdfDataUrl) {
      setPdfDataUrl(savedPdfDataUrl);
    } else {
      alert("No PDF file found for preview. Please upload a file first.");
      router.push("/design-project");
    }

    if (savedProjectData) {
      setProjectData(JSON.parse(savedProjectData));
    }
  }, [router]);

  // Effect to load and render the PDF when pdfDataUrl changes
  useEffect(() => {
    if (!pdfDataUrl) return;

    const loadAndRenderPdf = async () => {
      try {
        const pdfjs = await loadPdfLib();
        if (!pdfjs) {
          throw new Error("PDF.js library not loaded.");
        }

        const base64String = pdfDataUrl.split(",")[1];
        const binaryString = atob(base64String);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        const loadingTask = pdfjs.getDocument({ data: bytes });
        const pdfDoc = await loadingTask.promise;
        setPdfDocument(pdfDoc);
        setNumPages(pdfDoc.numPages);

        await renderPages(pdfDoc, [1, 2]);
      } catch (error) {
        console.error("Error loading or rendering PDF:", error);
        alert("Failed to load the PDF preview. Please try again.");
      }
    };

    loadAndRenderPdf();
  }, [pdfDataUrl]);

  // Function to render specific pages
  const renderPages = async (pdfDoc, pageNumbers) => {
    if (!pdfDoc) return;

    try {
      const rendered = await Promise.all(
        pageNumbers.map(async (pageNum) => {
          if (pageNum < 1 || pageNum > pdfDoc.numPages) return null;

          const page = await pdfDoc.getPage(pageNum);
          const scale = 1.5;
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;

          return canvas.toDataURL("image/png");
        })
      );

      setRenderedPages(rendered);
      setCurrentPages(pageNumbers);
    } catch (error) {
      console.error("Error rendering pages:", error);
    }
  };

  const handlePrevPages = () => {
    if (currentPages[0] > 1 && pdfDocument) {
      const newStartPage = Math.max(1, currentPages[0] - 2);
      renderPages(pdfDocument, [newStartPage, newStartPage + 1]);
    }
  };

  const handleNextPages = () => {
    if (currentPages[1] < numPages && pdfDocument) {
      const newStartPage = Math.min(numPages - 1, currentPages[1] + 1);
      renderPages(pdfDocument, [newStartPage, newStartPage + 1]);
    }
  };

  const handleSubmit = async () => {
    router.push("/shop");
  };

  // If PDF is still loading or not available, show a loading state
  if (!pdfDataUrl || !renderedPages[0]) {
    return (
      <>
        <NavBar navigate={router.push} />
        <div className="w-full min-h-screen flex items-center justify-center">
          <p>Loading PDF preview...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar navigate={router.push} />
      <div className="w-full min-h-screen px-4 md:px-6 py-6 md:py-10 bg-gradient-to-br from-[#eef4ff] to-[#fef6fb] font-sans">
        <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12 rounded-xl md:rounded-2xl shadow-xl bg-gradient-to-r from-[#ffe4ec] via-[#fdfdfd] to-[#e0f3ff] flex flex-col gap-6 md:gap-8 lg:gap-10">
          <div className="relative flex justify-center items-center px-2">
            <div
              className="absolute left-0 right-0 h-[2px] sm:h-[3px] lg:h-[4px]"
              style={{
                background:
                  "linear-gradient(90deg, #D15D9E 38.04%, #5D4495 121.51%)",
              }}
            />
            <div
              className="h-[35px] sm:h-[42px] lg:h-[47px] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] mx-2 sm:mx-4 flex items-center justify-center text-white font-medium text-xs sm:text-sm lg:text-base z-10 px-2 sm:px-4"
              style={{
                background:
                  "linear-gradient(90deg, #D15D9E 38.04%, #5D4495 121.51%)",
                borderRadius: "120px",
              }}
            >
              Preview Book
            </div>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-[#2A428C]">
              Review Your Book
            </h1>
            <p className="text-gray-600 max-w-3xl">
              Use This Preview Video to See How Your Text Book Will Look.
              Carefully Review The Margins, Layout, And Content Before
              Continuing. Your Book Will Print Exactly As Shown.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
            {/* Two Pages Display */}
            <div className="flex justify-center items-center mb-8">
              <div className="flex gap-6">
                {renderedPages.map((page, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-300 rounded-lg p-2 bg-white shadow-md"
                  >
                    {page ? (
                      <img
                        src={page}
                        alt={`Page ${currentPages[index]}`}
                        className="max-w-full h-auto max-h-96"
                      />
                    ) : (
                      <div className="w-64 h-96 flex items-center justify-center text-gray-500 bg-gray-100">
                        No page available
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Page Navigation */}
            <div className="flex justify-center gap-6 mb-8">
              <button
                className="px-6 py-2 bg-[#2A428C] text-white rounded-lg hover:bg-[#1d326c] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handlePrevPages}
                disabled={currentPages[0] === 1}
              >
                Previous
              </button>
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                Pages {currentPages[0]}-{currentPages[1]} of {numPages}
              </span>
              <button
                className="px-6 py-2 bg-[#2A428C] text-white rounded-lg hover:bg-[#1d326c] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNextPages}
                disabled={currentPages[1] >= numPages}
              >
                Next
              </button>
            </div>

            {/* Important Information Section */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-[#2A428C] mb-4">
                Important Information About Your Book
              </h2>
              <p className="text-gray-700 mb-4">
                Successfully review your book before continuing. The following
                items must be checked:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Ensure all text is visible and not cut off by margins</li>
                <li>Verify that images are clear and properly positioned</li>
                <li>Check that page numbering is correct and consistent</li>
                <li>
                  Confirm that all chapters and sections are in the right order
                </li>
                <li>Review the table of contents for accuracy</li>
              </ol>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6 mt-6 md:mt-10">
              {/* <button
                onClick={handleContactExpert}
                disabled={!!state.coverFile}
                className={`w-full max-w-md md:max-w-lg lg:max-w-xl px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-[#0a79f8] to-[#1e78ee] text-white font-medium text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition ${
                  state.coverFile ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Contact Cover Design Expert
              </button>

              <button
                onClick={() => {
                  // Save the uploaded file and form data to localStorage for the preview
                  if (state.selectedFile) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                      const pdfDataUrl = e.target.result; // This is the data URL
                      localStorage.setItem("previewPdfDataUrl", pdfDataUrl);
                      localStorage.setItem(
                        "previewFormData",
                        JSON.stringify(state.form)
                      );
                      localStorage.setItem(
                        "previewProjectData",
                        JSON.stringify(state.projectData)
                      );
                      router.push("/book-preview");
                    };
                    reader.onerror = function () {
                      alert("Failed to prepare PDF for preview.");
                    };
                    reader.readAsDataURL(state.selectedFile);
                  } else {
                    alert("Please upload your book PDF file first.");
                  }
                }}
                className={`w-full max-w-md md:max-w-lg lg:max-w-xl px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-[#0a79f8] to-[#1e78ee] text-white font-medium text-sm md:text-base rounded-full shadow-md hover:shadow-lg transition ${
                  state.coverFile ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Preview Your Book
              </button> */}

              <button
                onClick={handleSubmit}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl px-6 md:px-10 py-2 md:py-3 bg-gradient-to-r from-[#F8C20A] to-[#EE831E] text-white font-medium text-sm md:text-base rounded-full shadow-md hover:shadow-lg"
              >
                Print Your Book
              </button>
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPreview;
