import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full bg-[#031325] border border-white/10 rounded-xl px-5 py-3 text-white"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(e.target.value);
          }
        }}
      />

      <Search
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
    </div>
  );
};

export default SearchBar;