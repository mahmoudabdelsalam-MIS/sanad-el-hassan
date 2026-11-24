import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="التنقل بين صفحات المقالات"
      className="mt-10 flex items-center justify-center gap-2"
    >
      {/* Previous Page (RTL: Right arrow goes to previous page) */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="الصفحة السابقة"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-surface border border-brand-border text-brand-green hover:border-brand-gold hover:text-brand-gold disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => {
        const isCurrent = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isCurrent ? "page" : undefined}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isCurrent
                ? "bg-brand-green text-white shadow-[0_4px_12px_rgba(11,53,46,0.28)]"
                : "bg-brand-surface border border-brand-border text-brand-ink hover:border-brand-gold hover:text-brand-gold"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Page (RTL: Left arrow goes to next page) */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="الصفحة التالية"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-surface border border-brand-border text-brand-green hover:border-brand-gold hover:text-brand-gold disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    </nav>
  );
}
