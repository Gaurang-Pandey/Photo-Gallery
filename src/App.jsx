import { useState,useReducer,useEffect,useCallback } from "react";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import Searchbar from "./components/Searchbar";
import Error from "./components/Error";
import useFetchPhotos from "./hooks/UseFetchPhoto";
import { favouritesReducer } from "./reducers/favouritesReducer";

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState("");
  const Storage_Key="favourites";
  const [favourites, dispatch] = useReducer(favouritesReducer, [],
    ()=>{
      const storedFavourites = localStorage.getItem(Storage_Key);
      return storedFavourites ? JSON.parse(storedFavourites) : [];
    }
  );
  const handleSearch= useCallback((e)=>{
    setQuery(e.target.value)
  },[]);

  useEffect(() => {
    localStorage.setItem(Storage_Key, JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Photo Gallery
      </h1>

    <Searchbar query={query} onSearch={handleSearch} />

      {loading && <Loading />}

      {error && <Error message={error} />}

      {!loading && !error && <Gallery photos={photos} query={query} favourites={favourites} dispatch={dispatch} />}
    </div>
  );
}

export default App;