"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

const images = [
  "/Hero1.jpg",
  "/Hero2.jpg",
  "/Hero3.jpg",
  "/Hero1.jpg",
  "/Hero2.jpg",
  "/Hero3.jpg",
  "/Hero1.jpg",
];

export default function PhotoGallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalIsOpen]);

  return (
    <div className="max-w-7xl lg:mx-auto mx-10">
      <h1 className="text-center text-2xl font-bold my-4">Photo Gallery</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative group"
            onClick={() => openModal(index)}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-50"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>
      {modalIsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            {...handlers}
          >
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-bl-lg rounded-tr-lg lg:p-2"
            >
              <IoClose size={24} />
            </button>
            <div className="absolute top-0 left-0 bg-[#f68a09] text-white rounded-br-lg rounded-tl-lg px-2 lg:py-1">
              {`${currentImageIndex + 1}/${images.length}`}
            </div>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#f68a09] text-white rounded-r-lg p-2"
            >
              <FaArrowLeft className="lg:text-2xl text-sm" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#f68a09] text-white rounded-l-lg p-2"
            >
              <FaArrowRight className="lg:text-2xl text-sm" />
            </button>
            {images[currentImageIndex] && (
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="object-contain rounded-lg w-full h-full"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
