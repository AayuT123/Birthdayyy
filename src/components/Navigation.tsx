// ...existing code...

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onDownload: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, totalPages, onPrev, onNext, onDownload }) => (
  <div className="flex flex-col items-center gap-2 mt-6">
    <div className="flex gap-4">
      <button
        className="px-4 py-2 rounded-full bg-turquoise text-white font-pacifico shadow transition disabled:opacity-40"
        onClick={onPrev}
        disabled={currentPage === 0}
      >
        Prev
      </button>
      <button
        className="px-4 py-2 rounded-full bg-coral text-white font-pacifico shadow transition disabled:opacity-40"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
      >
        Next
      </button>
      <button
        className="px-4 py-2 rounded-full bg-gold text-navy-deep font-pacifico shadow transition"
        onClick={onDownload}
      >
        Download
      </button>
    </div>
    <div className="flex gap-2 mt-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <span
          key={i}
          className={`w-3 h-3 rounded-full ${i === currentPage ? 'bg-coral' : 'bg-gold'} transition`}
        />
      ))}
    </div>
  </div>
);
