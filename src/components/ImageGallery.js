"use client";

import Image from "next/image";
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import HomeHeading from "./custom ui/HomeHeading";

function renderNextImage(RenderImageProps, RenderImageContext) {
  const { alt = "", title, sizes } = RenderImageProps;
  const { photo, width, height } = RenderImageContext;

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
      className="bg-black rounded-lg"
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="hover:opacity-70 rounded-lg"
      />
    </div>
  );
}

export default function ImageGallery({ smallHeading, bigHeading, photos }) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="max-w-screen-xl xl:mx-auto mx-10 my-10 lg:my-28">
      <HomeHeading
        smallTitle={smallHeading}
        smallTitleCSS="justify-start"
        bigTitle={bigHeading}
        bigTitleCSS="justify-center text-left mb-5 lg:mb-14"
      />
      <RowsPhotoAlbum
        photos={photos}
        render={{
          image: renderNextImage,
        }}
        defaultContainerWidth={1280}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </section>
  );
}
