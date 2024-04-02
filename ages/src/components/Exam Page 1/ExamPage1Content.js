import React, { useEffect, useState } from "react";

const ExamPage1Content = ({ lv1Urls }) => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const images = lv1Urls.map((url) => {
      const image = new Image();
      image.onload = () => {
        setImagesLoaded((prev) => prev + 1);
      };
      image.src = url;
      return image;
    });

    return () => {
      images.forEach((image) => {
        image.onload = null;
      });
    };
  }, [lv1Urls]);

  useEffect(() => {
    if (imagesLoaded === lv1Urls.length) {
      setLoading(false);
    }
  }, [imagesLoaded, lv1Urls.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const ImageGallery = ({ imageUrls }) => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Full Screen ${index}`}
            style={{ width: "50%", height: "auto", maxWidth: "50%" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <ImageGallery imageUrls={lv1Urls} />
    </div>
  );
};

export default ExamPage1Content;
