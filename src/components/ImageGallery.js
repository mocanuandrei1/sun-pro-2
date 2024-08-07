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

const photos = [
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
  { src: "/Hero1.jpg", width: 1600, height: 900 },
];

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
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="max-w-screen-xl xl:mx-auto mx-10">
        <RowsPhotoAlbum
          photos={photos}
          render={{ renderNextImage }}
          defaultContainerWidth={1280}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
      </div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </>
  );
}
