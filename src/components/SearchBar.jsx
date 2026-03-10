function SearchBar() {
  return (
    <section>
      <div className="my-8">
        <input
          type="search"
          name="searchNote"
          id="searchNote"
          className="border-gray-400 w-full text-gray-400 border-2 py-2 px-2 rounded-md text-sm"
          placeholder="Search Notes..."
        />
      </div>
    </section>
  );
}

export default SearchBar;
