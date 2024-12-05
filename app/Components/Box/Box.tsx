"use client";

import { useEffect, useState } from "react";
import styels from "./Box.module.css";

interface BoxProps {
  image: string;
  title: string;
  description: string;
  mainImage: string;
  release_year: string;
  genre: string[];
}

function Box({
  image,
  title,
  description,
  mainImage,
  release_year,
  genre,
}: BoxProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //   function For Open Modal
  const openModal = () => setIsModalOpen(true);

  //   function For Open Modal
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // clean style when unmount
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [isModalOpen]);

  return (
    <div className={styels.Box}>
      <img
        src={image}
        alt={title}
        className={styels.ParentImage}
        onClick={openModal}
      />

      {isModalOpen && (
        <div className={styels.Modal} onClick={closeModal}>
          <div
            className={styels.ModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={mainImage} alt={title} />

            <div className={styels.Contents}>
              <h6>{title}</h6>
              <h5>
                {release_year} {genre.join(". ")}
              </h5>
              <p className={styels.Description}>{description}</p>
              <button>Get Started</button>
              <p className={styels.CustomText}>
                Create or restart your membership
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Box;
