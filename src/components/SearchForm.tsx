import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      action="#"
      className="search"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </form>
  );
}
