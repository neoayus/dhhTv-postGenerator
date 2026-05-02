import { forwardRef, useState } from "react";
import style from "../style/Card.module.css";
import { Ih3Logo, Import, Logo } from "./SVGs";

// functio to format text as per need (red and all caps) using regex.
const formatInline = (text) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} style={{ color: "rgb(255, 0, 0)", fontWeight: "bold" }}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

const Card = forwardRef(({ data, isBlack }, ref) => {
  const [gradientPos, setGradientPos] = useState(13);

  const newsBlock = data.news.split("\n").map((line, index) => (
    <span className={style.line} key={index}>
      {formatInline(line)} <br />
    </span>
  ));

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        className={!data.cover ? style.importCard : style.card}
        ref={ref}
        style={{ "--pos": `${gradientPos}%` }}
      >
        {/* Background Image */}
        {data.cover && (
          <img src={data.cover} alt="bg" className={style.bgImage} />
        )}

        {/* If no image */}
        {!data.cover ? (
          <div className="import-screen">
            <Import />
            <p>Add an Image</p>
          </div>
        ) : (
          <div className={style.content}>
            <span
              className={style.swipe}
              style={{ color: isBlack ? "black" : "white" }}
            >
              SWIPE LEFT
            </span>

            <div className={style.bottomContent}>
              <span className={style.type}> NEWS </span>
              <div className={style.news}>{newsBlock}</div>
              <p className={style.caption}>{data.caption}</p>

              <div className={style.footer}>
                <Ih3Logo />
                <div className={style.hr}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* slider */}
      <input
        className={style.slider}
        type="range"
        min="0"
        max="100"
        value={gradientPos}
        onChange={(e) => setGradientPos(Number(e.target.value))}
      />
    </div>
  );
});

export default Card;
