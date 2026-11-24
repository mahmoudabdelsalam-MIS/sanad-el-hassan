import React, { useMemo, useState } from "react";
import PageHero from "../shared/hero/PageHero";
import BlogFiltersBar from "./components/BlogFiltersBar";
import BlogCategoriesSidebar from "./components/BlogCategoriesSidebar";
import BlogGrid from "./components/BlogGrid";
import BlogPagination from "./components/BlogPagination";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "./data/blogData";

const ARTICLES_PER_PAGE = 3;

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const matched = BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      const matchesQuery =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    return [...matched].sort((a, b) => {
      if (sortBy === "oldest") {
        return a.publishedAt.localeCompare(b.publishedAt);
      }
      return b.publishedAt.localeCompare(a.publishedAt);
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));

  const paginatedArticles = useMemo(() => {
    const start = (safePage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, safePage]);

  return (
    <div className="w-full bg-brand-cream">
      {/* Reused Inner Page Hero Banner */}
      <PageHero
        eyebrow="المدونة القانونية"
        title="مقالات وتحليلات قانونية"
        subtitle="محتوى مهني يسلط الضوء على أبرز الأنظمة والتشريعات والقضايا العملية في المملكة العربية السعودية."
      />

      {/* Blog Main Layout */}
      <section
        aria-label="قائمة المقالات والتصنيفات"
        className="w-full py-10 sm:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            {/* Main Column (RTL Right): Filters + Articles Grid + Pagination */}
            <div className="lg:col-span-9 space-y-6">
              <BlogFiltersBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                categories={BLOG_CATEGORIES}
              />

              <BlogGrid
                articles={paginatedArticles}
                onResetFilters={handleResetFilters}
              />

              <BlogPagination
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* Sidebar Column (RTL Left): Categories List */}
            <div className="lg:col-span-3 lg:sticky lg:top-24">
              <BlogCategoriesSidebar
                categories={BLOG_CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
