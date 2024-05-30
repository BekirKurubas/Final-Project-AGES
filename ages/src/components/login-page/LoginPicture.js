import React, { useState, useEffect } from "react";
import { fetchImage } from "../utils/fetchImage";
const LoginPicture = () => {

  const [img, setImg] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const img = await fetchImage('telc_girl.jpg');
      setImg(img);
    };

    fetchImages();
  }, []);
  return (
    <div className="col-md-6 mb-5">
      <div style={{ padding: "20px" }}>
        <img
          src={img}
          alt="telc-girl"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
export default LoginPicture;