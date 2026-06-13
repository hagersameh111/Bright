const NewsCard = ({ article }) => {
  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-6 bg-[#031325] rounded-2xl p-4">
      <img
        src={
          article.image ||
          "/placeholder-news.jpg"
        }
        alt={article.title}
        loading="lazy"
        className="w-full h-[180px] object-cover rounded-xl"
      />

      <div>
        <div className="flex gap-3 text-sm mb-2">
          <span className="text-[#A50C0C]">
            {article.source?.name}
          </span>

          <span className="text-gray-400">
            {new Date(
              article.publishedAt
            ).toLocaleDateString()}
          </span>
        </div>

        <h2 className="text-white text-2xl font-semibold mb-3">
          {article.title}
        </h2>

        <p className="text-gray-300 mb-4">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="text-[#A50C0C]"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;