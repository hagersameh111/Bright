import { useEffect, useState } from "react";

import {
getTopNews,
getPoliticsNews,
getWorldNews,
getBusinessNews,
getTechnologyNews,
getMiddleEastNews,
searchNews,
} from "../../Services/gnews";

import NewsHero from "./Hero";
import BreakingNewsBar from "./components/NewsBar";
import NewsCard from "./components/NewsCard";
import SearchBar from "./components/SearchBar";
import NewsCategories from "./components/NewsCategories";
import Footer from "@/components/Footer/Footer";

const News = () => {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);

const [activeCategory, setActiveCategory] =
useState("Politics");

const loadNewsByCategory = async (
category
) => {
try {
console.log(
"Loading category:",
category
);

  let news = [];

  switch (category) {
    case "Politics":
      news =
        await getPoliticsNews();
      break;

    case "World":
      news =
        await getWorldNews();
      break;

    case "Business":
      news =
        await getBusinessNews();
      break;

    case "Technology":
      news =
        await getTechnologyNews();
      break;

    case "Middle East":
      news =
        await getMiddleEastNews();
      break;

    default:
      news = await getTopNews();
  }

  console.log(
    "Articles received:",
    news.length
  );

  setArticles(news);

  localStorage.setItem(
    `bright-news-${category}`,
    JSON.stringify(news)
  );
} catch (error) {
  console.error(error);

  const cached =
    localStorage.getItem(
      `bright-news-${category}`
    );

  if (cached) {
    setArticles(
      JSON.parse(cached)
    );
  }
} finally {
  setLoading(false);
}


};

const handleCategoryChange =
async (category) => {
setLoading(true);


  setActiveCategory(category);

  await loadNewsByCategory(
    category
  );
};


const handleSearch =
async (query) => {
if (!query.trim()) {
loadNewsByCategory(
activeCategory
);
return;
}


  setLoading(true);

  try {
    const news =
      await searchNews(query);

    setArticles(news);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
const timer = setTimeout(() => {
loadNewsByCategory(
"Politics"
);
}, 1000);


return () =>
  clearTimeout(timer);


}, []);

useEffect(() => {
const interval = setInterval(
() => {
loadNewsByCategory(
activeCategory
);
},
300000
);

return () =>
  clearInterval(interval);


}, [activeCategory]);

return (
<> <NewsHero />


  <BreakingNewsBar
    articles={articles}
  />

  <section
    className="min-h-screen py-10"
    style={{
      background:
        "linear-gradient(90deg,#000000 0%,#112135 50%,#000000 100%)",
    }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-6">
        <SearchBar
          onSearch={
            handleSearch
          }
        />

        <NewsCategories
          activeCategory={
            activeCategory
          }
          onCategoryChange={
            handleCategoryChange
          }
        />

        {!loading && (
          <div className="text-gray-400">
            {articles.length} Articles Found
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#A50C0C] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : articles.length >
          0 ? (
          <div className="space-y-6">
            {articles.map(
              (
                article,
                index
              ) => (
                <NewsCard
                  key={index}
                  article={
                    article
                  }
                />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-white text-3xl mb-4">
              No Articles Found
            </h2>

            <p className="text-gray-400">
              Try another search
              term or category.
            </p>
          </div>
        )}
      </div>
    </div>
  </section>

  <Footer />
</>

);
};

export default News;
