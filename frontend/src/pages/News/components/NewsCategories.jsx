

const categories = [
"Latest",
"Politics",
"World",
"Business",
"Technology",
"Middle East",
];

const NewsCategories = ({
activeCategory,
onCategoryChange,
}) => {
return ( <div className="flex flex-wrap gap-3">
{categories.map((category) => (
<button
key={category}
onClick={() =>
onCategoryChange(category)
}
className={`px-5 py-3 rounded-xl transition-all duration-300 ${
            activeCategory === category
              ? "bg-[#A50C0C] text-white"
              : "bg-[#031325] text-gray-300 hover:text-white"
          }`}
>
{category} </button>
))} </div>
);
};

export default NewsCategories;
