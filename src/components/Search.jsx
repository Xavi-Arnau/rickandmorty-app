import React from "react";

const Search = ({ search, onChange }) => {
  return (
    <div className="max-w-6xl px-5 py-5 mx-auto text-center">
      <input
        type="search"
        placeholder="Search characters by name..."
        className="bg-zinc-800 mx-auto px-4 py-2 rounded-lg focus:outline-none w-full max-w-xs"
        value={search}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
