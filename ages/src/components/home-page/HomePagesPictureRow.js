import React, { useState, useEffect } from 'react';
import { fetchImage } from '../utils/fetchImage';

const HomePagePictureRow = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const img = await fetchImage('ages-homepage-image.png');
      setImg(img);
    };

    fetchImages();
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        marginBottom: "20px",
        maxWidth: "100%",
        padding: "0",
      }}
    >
      <img
        src={img}
        alt="AGES"
        style={{ marginTop: "0px", width: "100%", height: "auto" }}
      />
    </div>
  );
};
export default HomePagePictureRow;
