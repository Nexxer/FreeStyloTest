import React from 'react';
import style from './../styles/index.module.sass'
const Index = () => {

  return (
    <div className={style.page}>
      <h1 className={style.title}>Тестовое задание FreeStylo</h1>
      <hr/>
      <a href="/favorites" className={style.link}>Избранное</a>
      <div>
        <form className={style.form}>
          <label className={style.form__label}>Введите название канала</label>
          <input placeholder={'Например: dota2mc_ru'} className={style.form__input} type={'text'} required={true}/>
          <button type={"submit"} className={style.form__button}>Найти</button>
        </form>
      </div>
    </div>
  );
};

export default Index;