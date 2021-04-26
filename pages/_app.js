import { useEffect, useState } from "react";
import { getChanelVideos } from "../utils/TwitchAPI";
import "../styles/global.sass";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [searchInput, setSearchInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const handleInputChange = (event) => setSearchInput(event.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchError(false);
    setLoading(true);
    getChanelVideos(searchInput)
      .then((res) => {
        setVideos(res.videos);
      })
      .catch(() => {
        setSearchError(true);
      })
      .finally(() => setLoading(false));
  };

  const toggleLike = (video, isSave) => {
    if (isSave) {
      return setFavoriteVideos((prev) =>
        prev.filter((i) => i._id !== video._id)
      );
    }
    setFavoriteVideos((prev) => [...prev, video]);
  };

  useEffect(() => {
    try {
      const savedFavoriteVideos = localStorage.getItem("favoriteVideos");
      if (savedFavoriteVideos) {
        setFavoriteVideos(JSON.parse(savedFavoriteVideos));
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const favoriteVideosToSave = JSON.stringify(favoriteVideos);
      localStorage.setItem("favoriteVideos", favoriteVideosToSave);
    } catch {}
  }, [favoriteVideos]);

  return (
    <Component
      searchInput={searchInput}
      videos={videos}
      loading={loading}
      searchError={searchError}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      toggleLike={toggleLike}
      favoriteVideos={favoriteVideos}
      {...pageProps}
    />
  );
}
