import Head from "next/head";
import Link from "next/link";
import SearchResult from "../../components/SearchResult";
import style from "./../../styles/index.module.sass";

function Favorites({ toggleLike, favoriteVideos }) {
  return (
    <>
      <Head>
        <title>FreeStylo - избранное</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.page}>
        <header>
          <h1 className={style.title}>Избранное</h1>
          <hr />
          <Link href="/">
            <a className={style.link}>Главнвя</a>
          </Link>
        </header>
        <SearchResult videos={favoriteVideos} toggleLike={toggleLike} isSave={true} />
      </div>
    </>
  );
}

export default Favorites;
