import React, { useState, useEffect } from 'react';
import { fetchImage } from '../utils/fetchImage';

const LevelB1Row = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const img = await fetchImage('three-friend.jpg');
      setImg(img);
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="col-md-6 mb-5">
        <div style={{ padding: "20px" }}>
          <img
            src={img}
            alt="Three-friend"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div
          style={{
            padding: "10px",
            fontSize: "13px",
            whiteSpace: "pre-line",
            marginTop: "20px",
          }}
        >
          <h1 style={{
            fontSize: "50px",
          }}>The CEFR level B1</h1>
          <br />
          <p style={{
            fontSize: "27px",
          }}>
            Learners at B1 level can communicate in a simple and coherent way in
            daily life, at work, and when travelling write or speak about a
            range of topics in their own area of interest. participate in
            conversations about family, hobbies, work, and current events,
            reporting experiences, describing goals, and giving reasons for
            opinions. generally use grammar and language correctly. understand
            and produce simple, connected texts on familiar topics.
          </p>
        </div>
      </div>
    </>
  );
};
export default LevelB1Row;
