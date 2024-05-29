import React, { useState, useEffect } from 'react';
import { fetchImage } from '../utils/fetchImage';

const HomePageGoalsRow = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const img = await fetchImage('goals.jpg');
      setImg(img);
    };

    fetchImages();
  }, []);


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div style={{ padding: "20px" }}>
            <img
              src={img}
              alt="Goals"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            style={{
              padding: "10px",
              fontSize: "23px",
              whiteSpace: "pre-line",
            }}
          >
            <h1 style={{ fontSize: "50px" }}>Goals</h1>
            <br></br>
            <p>
              · Effective Exam Simulation: AGES aims to provide users with a
              realistic simulation of the B1 Deutsch Telc Prüfung, ensuring that
              they are well-prepared for the actual exam environment.
              <br />
              · User Engagement and Retention: The project targets a 30%
              increase in user engagement over the first three months, achieved
              through interactive features and personalized feedback.
              <br />· Time-Efficient Practice: The project aims to help users
              efficiently manage their time during the "Lesen Verstehen" and
              "Sprachbausteine" sections, providing them with a practice
              environment that mirrors the actual exam duration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageGoalsRow;
