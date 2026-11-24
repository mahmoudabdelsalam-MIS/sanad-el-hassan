import React from "react";
import { ChevronLeft, Layers } from "lucide-react";

export default function BlogCategoriesSidebar({
  categories = [],
  selectedCategory,
  onSelectCategory,
}) {
  const handleToggle = (categoryName) => {
    if (selectedCategory === categoryName) {
      onSelectCategory("all");
    } else {
      onSelectCategory(categoryName);
    }
  };

  return (
    <aside
      aria-label="تصنيفات المدونة"
      className="rounded-2xl bg-brand-surface border border-brand-border p-5 shadow-[0_10px_28px_-16px_rgba(11,53,46,0.12)]"
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-brand-border">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-brand-gold stroke-[1.75]" />
          <h2 className="text-base sm:text-lg font-bold text-brand-green">
            التصنيفات
          </h2>
        </div>

        {selectedCategory !== "all" && (
          <button
            type="button"
            onClick={() => onSelectCategory("all")}
            className="text-xs font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors cursor-pointer"
          >
            عرض الكل
          </button>
        )}
      </div>

      {/* Categories List */}
      <ul className="space-y-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <li key={cat.name}>
              <button
                type="button"
                onClick={() => handleToggle(cat.name)}
                aria-pressed={isActive}
                className={`group w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-green text-white font-semibold shadow-xs"
                    : "text-brand-ink font-medium hover:bg-brand-sand/75 hover:text-brand-gold"
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <ChevronLeft
                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? "text-[#D2AC80] -translate-x-0.5"
                        : "text-brand-gold group-hover:-translate-x-0.5"
                    }`}
                  />
                  <span className="truncate">{cat.name}</span>
                </span>

                <span
                  className={`inline-flex items-center justify-center min-w-[28px] h-6 px-2 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-[#C8A074]/25 text-[#F4DFC1]"
                      : "bg-brand-sand text-brand-gold group-hover:bg-white"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
