type SearchFormProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export default function SearchForm({
  searchText,
  setSearchText
}: SearchFormProps) {
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
