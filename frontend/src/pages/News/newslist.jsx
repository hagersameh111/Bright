// src/pages/News.jsx

import { useEffect, useState } from "react";
import { getTopNews } from "@/Services/gnews";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    try {
      const data = await getTopNews();
      setArticles(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();

    const interval = setInterval(() => {
      loadNews();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto py-10">
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex gap-6 mb-6 bg-[#031325] p-4 rounded-xl"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-64 h-40 object-cover rounded-lg"
          />

          <div>
            <h2 className="text-white text-2xl mb-2">
              {article.title}
            </h2>

            <p className="text-gray-300 mb-3">
              {article.description}
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#A50C0C]"
            >
              Read Full Article
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;