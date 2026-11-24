import React from "react";
import { CalendarDays, Layers, Search, X } from "lucide-react";
import CustomSelect from "../../shared/select/CustomSelect";

const SORT_OPTIONS = [
  { value: "newest", label: "الأحدث" },
  { value: "oldest", label: "الأقدم" },
];

export default function BlogFiltersBar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  selectedCategory,
  onCategoryChange,
  categories = [],
}) {
  const categoryOptions = [
    { value: "all", label: "جميع التصنيفات" },
    ...categories.map((cat) => ({
      value: cat.name,
      label: cat.name,
      count: cat.count,
    })),
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
      {/* Search Input (Right side in RTL) */}
      <div className="md:col-span-6 relative">
        <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ابحث في المقالات..."
          aria-label="ابحث في المقالات"
          className="w-full rounded-full bg-brand-surface border border-brand-border pr-11 pl-10 py-2.5 text-sm text-brand-ink placeholder:text-[#7A8884] shadow-[0_4px_14px_-10px_rgba(11,53,46,0.12)] focus:outline-none focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="مسح البحث"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-brand-muted hover:text-brand-green hover:bg-brand-sand transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Custom Sort Dropdown (Middle) */}
      <div className="md:col-span-3">
        <CustomSelect
          options={SORT_OPTIONS}
          value={sortBy}
          onChange={onSortChange}
          icon={CalendarDays}
          shape="pill"
          ariaLabel="ترتيب المقالات"
        />
      </div>

      {/* Custom Category Filter Dropdown (Left side in RTL) */}
      <div className="md:col-span-3">
        <CustomSelect
          options={categoryOptions}
          value={selectedCategory}
          onChange={onCategoryChange}
          icon={Layers}
          shape="pill"
          placeholder="جميع التصنيفات"
          ariaLabel="تصفية حسب التصنيف"
        />
      </div>
    </div>
  );
}
