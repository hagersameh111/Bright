const BreakingNewsBar = ({
articles = [],
}) => {
const headlines =
articles.slice(0, 10);

return ( <div className="bg-[#A50C0C] h-12 overflow-hidden flex items-center"> <div className="bg-black h-full px-8 flex items-center shrink-0"> <span className="text-white font-semibold tracking-wider">
Breaking News </span> </div>


  <div className="overflow-hidden flex-1 group">
    <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
      {[...headlines, ...headlines].map(
        (
          article,
          index
        ) => (
          <a
            key={index}
            href={
              article.url
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-10 hover:text-black transition"
          >
            ●{" "}
            {
              article.title
            }
          </a>
        )
      )}
    </div>
  </div>
</div>


);
};

export default BreakingNewsBar;
