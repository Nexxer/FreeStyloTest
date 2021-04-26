import Card from "./Card";
import style from "./../styles/searchResult.module.sass";

function SearchResult({ videos, toggleLike, favoriteVideos, isSave }) {
  return (
    <ul className={style.cards}>
      {videos.map((item) => {
        return (
          <Card
            key={item._id}
            video={item}
            toggleLike={toggleLike}
            isSave={isSave || favoriteVideos.some((i) => i._id === item._id)}
          />
        );
      })}
    </ul>
  );
}

export default SearchResult;
