import React, { useState } from "react";

import { images } from "../../images.js";
import styles from "./gallery.module.css";
import ImageModal from "../ImageModal.jsx";
import Image from "../ImageCard.jsx";

function Gallary() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imgIndex, setimgIndex] = useState(null);

  const HandlePrevious = () => {
    if (imgIndex === 0) {
      setimgIndex(images.length - 1);
    } else {
      setimgIndex(imgIndex - 1);
    }
  };

  const HandleNext = () => {
    if (imgIndex === images.length - 1) {
      setimgIndex(0);
    } else {
      setimgIndex(imgIndex + 1);
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {/* imgage card */}
        {images.map((img, index) => (
          <Image
            key={index}
            img={img}
            index={index}
            handleOpen={handleOpen}
            setimgIndex={setimgIndex}
          />
        ))}
      </div>

      {/* maodal */}
      <ImageModal
        imgIndex={imgIndex}
        open={open}
        handleClose={handleClose}
        images={images}
        HandleNext={HandleNext}
        HandlePrevious={HandlePrevious}
      />
    </section>
  );
}

export default Gallary;
