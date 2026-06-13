import { useEffect, useState } from "react";
import BreakingNewsBar from "../News/components/NewsBar";

const HomeBreakingNewsBar = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const politicsNews =
      localStorage.getItem(
        "bright-news-Politics"
      );

    if (politicsNews) {
      setArticles(
        JSON.parse(politicsNews)
      );
    }
  }, []);

  return (
    <BreakingNewsBar articles={articles} />
  );
};

export default HomeBreakingNewsBar;