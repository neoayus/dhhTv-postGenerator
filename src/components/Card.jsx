import style from "../style/Card.module.css";
import { Import, Logo } from "./SVGs";

export default function Card({ data, ref }) {
  // refactor: split the lyrics block in different bars on line brak.
  const newsBlock = data.news.split("\n").map((line, index) => (
    <span className="line" key={index}>
      {line} <br />
    </span>
  ));

  return (
    <div
      className={!data.cover ? style.importCard : style.card}
      ref={ref}
      style={{
        backgroundImage: `url(${data.cover})`,
      }}
    >
      {!data.cover ? (
        <div className="import-screen">
          <Import />
          <p>Add an Image</p>
        </div>
      ) : (
        <div className={style.content}>
          <span className={style.swipe}> SWIPE LEFT </span>
          <div className={style.bottomContent}>
            <span className={style.type}> NEWS </span>
            <div className={style.news}> {newsBlock} </div>
            <p className={style.caption}> {data.caption}</p>
            <div className={style.footer}>
              <Logo />
              <div className={style.hr}></div>
            </div>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}
