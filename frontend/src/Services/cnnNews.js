const RSS_FEEDS = {
  Politics:
    "http://rss.cnn.com/rss/edition.rss",

  World:
    "http://rss.cnn.com/rss/edition_world.rss",

  Business:
    "http://rss.cnn.com/rss/money_latest.rss",

  Technology:
    "http://rss.cnn.com/rss/edition_technology.rss",

  Sports:
    "http://rss.cnn.com/rss/edition_sport.rss",

  Entertainment:
    "http://rss.cnn.com/rss/edition_entertainment.rss",
};

const extractImage = (html) => {
  const match = html?.match(
    /<img[^>]+src="([^">]+)"/i
  );

  return match
    ? match[1]
    : "/placeholder-news.jpg";
};

export const getNewsByCategory =
  async (category) => {
    try {
      const rssUrl =
        RSS_FEEDS[category] ||
        RSS_FEEDS.Politics;

      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          rssUrl
        )}`
      );

      const data =
        await response.json();

      console.log(
        "CNN DATA:",
        data
      );

      return (
        data.items?.map(
          (item) => ({
            title:
              item.title,

            description:
              item.description?.replace(
                /<[^>]+>/g,
                ""
              ) || "",

            image:
              item.thumbnail ||
              extractImage(
                item.description
              ),

            url:
              item.link,

            source: {
              name: "CNN",
            },

            publishedAt:
              item.pubDate ||
              new Date(),

            category,
          })
        ) || []
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  };

export const searchNews =
  async (query) => {
    const news =
      await getNewsByCategory(
        "Politics"
      );

    return news.filter(
      (article) =>
        article.title
          ?.toLowerCase()
          .includes(
            query.toLowerCase()
          ) ||
        article.description
          ?.toLowerCase()
          .includes(
            query.toLowerCase()
          )
    );
  };