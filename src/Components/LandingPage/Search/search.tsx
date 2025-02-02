import React, { useState } from "react";

import styling from "./search.module.css";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  debounceDelay?: number;
  borderRadius?: string;
  value?: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  onSearch,
  debounceDelay = 500,
    value,
  borderRadius
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
    <div className={styling.main_cover}>
      <div className={styling.covering}>
        <div className={styling.search_side}>
          <input
            className={styling.written}
            type="text"
            value={query || value}
            onChange={handleChange}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            name=""
            id=""
          />
        </div>
        <div className={styling.talent_side}>
          <hr className={styling.hr} />
          <div className={styling.talent} onClick={handleSearch}>
            <p>Talent</p>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726006071/Vector_edrpho.svg"
              alt="dropdown"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
