import style from "./../styles/preLoader.module.sass";

function PreLoader() {
  return (
    <div className={style.preloader}>
      <i className={style.preloader__spin} />
      <p className={style.preloader__text}>Идет загрузка</p>
    </div>
  );
}

export default PreLoader;
