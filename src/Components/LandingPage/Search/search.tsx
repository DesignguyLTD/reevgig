import React, { useState } from "react";

import styling from "./search.module.css";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceDelay?: number;
  borderRadius?: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  onSearch,
  debounceDelay = 500,
  borderRadius,
}) => {
  const [query, setQuery] = useState<string>("");
  const [timedOut, setTimedOut] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (timedOut) {
      clearTimeout(timedOut);
    }

    const id = setTimeout(() => {
      onSearch(newQuery);
    }, debounceDelay);

    setTimedOut(id);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styling.input_cover}>
      <div className={styling.search_side}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          name=""
          id=""
        />
      </div>
      <div className={styling.talent_side}>
        <hr className={styling.hr} />
        <div className={styling.talent}>
          <p>Talent</p>
          <img
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726006071/Vector_edrpho.svg"
            alt="dropdown"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
