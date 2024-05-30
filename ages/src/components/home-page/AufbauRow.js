import React, { useState, useEffect } from 'react';
import { fetchImage } from '../utils/fetchImage';

const AufbauRow = () => {
  const [img1, setImg1] = useState([]);
  const [img2, setImg2] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const img1 = await fetchImage('telc-b1-exam-book.jpg');
      const img2 = await fetchImage('pruefung-ablauf.png');

      setImg1(img1);
      setImg2(img2);

    };

    fetchImages();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mb-5">
          <div className="row">
            <div style={{ padding: "20px" }}>
              <img
                src={img1}
                alt="telc-B1-exam-book"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="row">
            <div style={{ padding: "20px" }}>
              <img
                src={img2}
                alt="Prüfung-Ablauf"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AufbauRow;
