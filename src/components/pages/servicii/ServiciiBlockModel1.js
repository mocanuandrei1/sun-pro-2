import Button from "@/components/custom ui/Button";
import HomeHeading from "@/components/custom ui/HomeHeading";
import Image from "next/image";
import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

const ServiciiBlockModel1 = ({
  CTAButton,
  id,
  reversed,
  backgroundColor,
  smallHeading,
  bigHeading,
  firstH3,
  firstH3Text,
  secondH3,
  secondH3Text,
  thirdH3,
  thirdH3Text,
}) => {
  return (
    <section className={"my-28 " + backgroundColor} id={id}>
      <div
        className={`max-w-screen-xl xl:mx-auto mx-10 ${
          reversed ? "py-10" : "py-0"
        } grid lg:grid-cols-2 grid-cols-1 items-center gap-10`}
      >
        <div
          className={`flex flex-col gap-10 ${
            reversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src="/Hero1.jpg"
            alt="Copertine cu brațe laterale"
            width={1200}
            height={800}
            className="rounded-lg"
          ></Image>
          {CTAButton && (
            <Button
              type="link"
              href="/contact"
              customClass="font-semibold w-full sm:w-[280px] mx-auto"
              text="OBȚINE O CONSULTAȚIE"
              mainColor="blue"
              secondColor="orange"
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-3 justify-around ${
            reversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div>
            <HomeHeading
              smallTitle={smallHeading}
              smallTitleCSS="justify-start"
              bigTitle={bigHeading}
              bigTitleCSS="justify-center text-left mb-8"
            />
          </div>
          <div className="mb-8">
            {firstH3 && <h3 className="mb-3">{firstH3}</h3>}
            <p>{firstH3Text}</p>
          </div>
          <div className="mb-8">
            <h3 className="mb-3">{secondH3}</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 flex-wrap">
                <TbCircleNumber1Filled className="text-xl text-custom-orange" />
                <span className="font-semibold">{secondH3Text[0].title}</span>
                {secondH3Text[0].text}
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <TbCircleNumber2Filled className="text-xl text-custom-orange" />
                <span className="font-semibold">{secondH3Text[1].title}</span>
                {secondH3Text[1].text}
              </li>
              {secondH3Text[2] && (
                <li className="flex items-center gap-2 flex-wrap">
                  <TbCircleNumber3Filled className="text-xl text-custom-orange" />
                  <span className="font-semibold">{secondH3Text[2].title}</span>
                  {secondH3Text[2].text}
                </li>
              )}
            </ul>
          </div>
          {(thirdH3 || thirdH3Text) && (
            <div>
              <h3 className="mb-3">{thirdH3}</h3>
              {thirdH3Text && (
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-2 flex-wrap">
                    {thirdH3Text[0].title && (
                      <>
                        <TbCircleNumber1Filled className="text-xl text-custom-orange" />
                        <span className="font-semibold">
                          {thirdH3Text[0].title}
                        </span>
                      </>
                    )}
                    {thirdH3Text[0].text}
                  </li>
                  {thirdH3Text[1] && (
                    <li className="flex items-center gap-2 flex-wrap">
                      {thirdH3Text[1].title && (
                        <>
                          <TbCircleNumber2Filled className="text-xl text-custom-orange" />
                          <span className="font-semibold">
                            {thirdH3Text[1].title}
                          </span>
                        </>
                      )}
                      {thirdH3Text[1].text}
                    </li>
                  )}
                  {thirdH3Text[2] && (
                    <li className="flex items-center gap-2 flex-wrap">
                      <TbCircleNumber3Filled className="text-xl text-custom-orange" />
                      <span className="font-semibold">
                        {thirdH3Text[2].title}
                      </span>
                      {thirdH3Text[2].text}
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiciiBlockModel1;
