import style from "./../styles/card.module.sass";

function Card({ video, toggleLike, isSave }) {
  const toggleSaveCard = () => {
    toggleLike(video, isSave);
  };

  return (
    <li className={style.card}>
      <img
        alt={"превью"}
        src={video.preview.medium}
        className={style.card__image}
      />
      <a className={style.card__text} href={video.url}>
        {video.title}
      </a>
      <button
        className={
          isSave
            ? style.card__like
            : ` ${style.card__like} ${style.card__like_no}`
        }
        onClick={toggleSaveCard}
      ></button>
    </li>
  );
}

export default Card;
