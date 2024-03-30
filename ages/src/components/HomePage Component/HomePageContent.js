import React, { useState, useEffect } from "react";
import ExecutiveSummaryRow from "./ExecutiveSummaryRow";
import HomePagePictureRow from "./HomePagesPictureRow";
import GoalsRow from "./GoalsRow";
import KeyFeaturesRow from "./KeyFeatures";
import ConclusionRow from "./ConclusionRow";
import IconsCardRow from "./IconsCardRow";

const Content = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const Card = ({ title, text, imgSrc, name }) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={imgSrc} className="card-img-top" alt="Person" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">{name}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HomePagePictureRow />

      <ExecutiveSummaryRow />

      <GoalsRow />

      <KeyFeaturesRow />

      <ConclusionRow />

      <IconsCardRow />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="row">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/telc-B1-exam-book.jpg"
                  alt="telc-B1-exam-book"
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="row">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Pr%C3%BCfung-Ablauf.png"
                  alt="Prüfung-Ablauf"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ marginBottom: "80px" }}>
        <h1>Our Clients Speak</h1>
        <p>We have been working with clients around the world</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          {people.map((person, index) => (
            <Card
              key={index}
              title={`Title ${index + 1}`}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis nisi, molestie non metus sit amet, consectetur aliquet lorem."
              imgSrc={person.picture.large}
              name={`${person.name.first} ${person.name.last}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
