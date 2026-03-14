import { useMemo } from "react";
import PhotoCard from "./Photocard";

export default function Gallery({ photos, query, favourites, dispatch }) {
  const search = query.toLowerCase();
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search),
    );
  }, [photos, query]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {query && filteredPhotos.length === 0 && (
        <p className="col-span-4 text-center text-gray-500 mt-10">
          No photos found for "{query}"
        </p>
      )}
      {filteredPhotos.length !== 0 &&
        filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />
        ))}
    </div>
  );
}
