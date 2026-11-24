import React from "react";
import { motion } from "motion/react";
import { FileSearch } from "lucide-react";
import BlogCard from "../../shared/cards/BlogCard";
import Button from "../../shared/button/Button";
import { LUXURY_EASE } from "../../shared/motion/MotionPrimitives";

export default function BlogGrid({ articles = [], onResetFilters }) {
  if (articles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: LUXURY_EASE }}
        className="rounded-2xl bg-brand-surface border border-brand-border p-10 text-center flex flex-col items-center justify-center"
      >
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-sand text-brand-gold mb-4">
          <FileSearch className="w-7 h-7 stroke-[1.6]" />
        </span>
        <h3 className="text-lg font-bold text-brand-green">
          لا توجد مقالات مطابقة لبحثك
        </h3>
        <p className="mt-2 text-sm text-brand-muted max-w-md">
          جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً لاستعراض المقالات
          والتحليلات القانونية المتاحة.
        </p>
        {onResetFilters && (
          <Button
            variant="primary"
            size="md"
            onClick={onResetFilters}
            className="mt-5"
          >
            عرض جميع المقالات
          </Button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
            ease: LUXURY_EASE,
          }}
          className="h-full"
        >
          <BlogCard
            image={article.image}
            category={article.category}
            title={article.title}
            excerpt={article.excerpt}
            date={article.date}
            to={`/blog/${article.id}`}
            className="h-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
