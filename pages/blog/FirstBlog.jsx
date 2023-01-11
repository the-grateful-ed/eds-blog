import React from "react";
import { allArticles } from "contentlayer/generated";

// FirstBlog component
const FirstBlog = ({ article }) => {
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className="group mx-auto block max-w-sm gap-3 bg-gray-50  sm:max-w-full lg:grid lg:grid-cols-12"
    >
      <img
        src={article.image}
        alt=""
        className="h-64 w-full rounded bg-gray-500 object-cover sm:h-96 lg:col-span-7"
      />
      <div className="space-y-2 p-6 lg:col-span-5">
        <h3>{article.title}</h3>
        <span className="text-xs text-gray-600">{article.publishedAt}</span>
        <p>{article.description}</p>
      </div>
    </a>
  );
};

export default FirstBlog;

// cardTitle: `text-2xl font-semibold group-hover:underline group-focus:underline sm:text-4xl`
// cardTest: `text-gray-800`
