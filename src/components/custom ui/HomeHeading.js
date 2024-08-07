import React from "react";
import { LuCrown } from "react-icons/lu";

const HomeHeading = ({
  smallTitle,
  smallTitleCSS,
  bigTitle,
  bigTitleCSS,
  bigTitleSecond,
}) => {
  return (
    <>
      <p
        className={
          "flex text-lg text-[#f68a09] font-semibold grid-about-2 " +
          smallTitleCSS
        }
      >
        <LuCrown className="pr-2 text-3xl" />
        {smallTitle}
      </p>
      <h2
        className={
          "text-2xl sm:text-3xl font-bold leading-relaxed grid-about-3 " +
          bigTitleCSS
        }
      >
        {bigTitle + " "}
        {bigTitleSecond && (
          <span className="hidden sm:inline-block">{bigTitleSecond}</span>
        )}
      </h2>
    </>
  );
};

export default HomeHeading;
