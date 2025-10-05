import { useState } from 'react';
import { CoverPage } from './components/CoverPage';
import { LetterPage } from './components/LetterPage';
import { PrintLetterPage } from './components/PrintLetterPage';
import { Navigation } from './components/Navigation';

const PAGES = [
  <CoverPage key="cover" />,
  <LetterPage key="letter" />,
];

const PRINT_PAGES = [
  <CoverPage key="cover-print" />,
  <PrintLetterPage key="letter-print" />,
];

export default function App() {
  const [page, setPage] = useState(0);
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(PAGES.length - 1, p + 1));
  const handleDownload = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
      <div
        className="relative aspect-[3/4] w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] overflow-hidden rounded-2xl shadow-2xl border-4 border-gold bg-cream"
        style={{ transition: 'box-shadow 0.3s' }}
      >
        {/* Page transition logic: only render current page with fade/slide animation */}
        <div className="w-full h-full">
          {!isPrinting ? (
            <div className="relative w-full h-full">
              <div
                key={page}
                className="absolute w-full h-full top-0 left-0 transition-all duration-700"
                style={{
                  opacity: 1,
                  transform: 'translateX(0)',
                }}
              >
                {PAGES[page]}
              </div>
            </div>
          ) : (
            <div className="print-container">
              {PRINT_PAGES.map((Component, i) => (
                <div key={i} className="print-page">
                  {Component}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Navigation
        currentPage={page}
        totalPages={PAGES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onDownload={handleDownload}
      />
      {/* Print styles */}
      <style>{`
        @media print {
          body, html {
            background: #FFF8F0 !important;
          }
          .print-container {
            display: block !important;
          }
          .print-page {
            page-break-after: always;
            width: 100vw;
            height: 100vh;
            background: #FFF8F0;
            box-sizing: border-box;
            padding: 2rem;
          }
          .aspect-[3/4], .rounded-2xl, .shadow-2xl, .border-4, .bg-cream {
            all: unset !important;
          }
          .min-h-screen, .flex, .items-center, .justify-center {
            all: unset !important;
          }
          .print-container > .print-page {
            display: block !important;
            break-after: page;
          }
          .print-container {
            width: 100vw;
            height: 100vh;
          }
        }
      `}</style>
    </div>
  );
}
// ...existing code...
