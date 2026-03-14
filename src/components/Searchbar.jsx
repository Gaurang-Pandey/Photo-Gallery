export default function Searchbar({ query, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by Author..."
        value={query}
        onChange={onSearch}
        className="p-2 mb-6 w-full border rounded text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
}
