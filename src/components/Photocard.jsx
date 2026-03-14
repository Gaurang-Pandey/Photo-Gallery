import { useCallback } from "react";

export default function PhotoCard({ photo, favourites, dispatch }) {
  const isFavourite = favourites.includes(photo.id);
  const toggleFavourite = useCallback(() => {
    dispatch({ type: "Toggle_Favourite", id: photo.id });
  }, [dispatch, photo.id]);
  return (
    <div className="bg-white rounded shadow p-2">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded"
      />
      <p className="mt-2 text-sm font-medium text-black">{photo.author}</p>
      <button
        onClick={toggleFavourite}
        className={`mt-0 px-2 text-2xl rounded transition hover:bg-gray-200 ${
          isFavourite ? "text-red-500" : "text-gray-400 hover:text-red-400"
        }`}
      >
        ♥
      </button>
    </div>
  );
}
