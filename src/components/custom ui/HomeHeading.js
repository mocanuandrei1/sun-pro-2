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
          "text-3xl lg:text-4xl font-bold leading-relaxed grid-about-3 mb-8 lg:mb-0" +
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
