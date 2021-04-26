import Head from "next/head";
import Link from "next/link";
import style from "./../styles/index.module.sass";
import SearchResult from "../components/SearchResult";
import PreLoader from "../components/PreLoader";

function Index({
  searchInput,
  loading,
  searchError,
  handleInputChange,
  handleSubmit,
  videos,
  toggleLike,
  favoriteVideos,
}) {
  return (
    <>
      <Head>
        <title>FreeStylo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.page}>
        <header>
          <h1 className={style.title}>Главная</h1>
          <hr />
          <Link href="/favorites">
            <a className={style.link}>Избранное</a>
          </Link>
          <div>
            {/* <a href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=k5kbhnwh2dd229ti2858yt0ftwaj7s&redirect_uri=http://localhost:3000&scope=channel_read">
              Login
            </a> */}
            <form className={style.form} onSubmit={handleSubmit}>
              <label className={style.form__label}>
                Введите название канала
              </label>
              <input
                placeholder={"Например: dota2mc_ru"}
                className={style.form__input}
                type={"text"}
                required={true}
                value={searchInput}
                onChange={handleInputChange}
              />
              <button type={"submit"} className={style.form__button}>
                Найти
              </button>
            </form>
          </div>
        </header>
        {loading ? (
          <PreLoader />
        ) : searchError ? (
          <h2>Не удалось найти канал</h2>
        ) : (
          <SearchResult
            videos={videos}
            toggleLike={toggleLike}
            favoriteVideos={favoriteVideos}
          />
        )}
      </div>
    </>
  );
}

export default Index;
