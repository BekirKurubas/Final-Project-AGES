import React, { useState, useEffect } from "react";
import { LiaReadme } from "react-icons/lia";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrAssistListening } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import ExecutiveSummaryRow from "./ExecutiveSummaryRow";
import HomePagePictureRow from "./HomePagesPictureRow";
import GoalsRow from "./GoalsRow";
import KeyFeaturesRow from "./KeyFeatures";

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

  const cardStyle = {
    width: "190px",
    height: "170px",
    padding: "20px",
    backgroundColor: "red",
    color: "white",
    marginBottom: "100px",
    marginLeft: "25px",
    borderRadius: "20px",
  };

  return (
    <div>
      <HomePagePictureRow />

      <ExecutiveSummaryRow />

      <GoalsRow />

      <KeyFeaturesRow />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div style={{ padding: "20px" }}>
              <img
                src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/conclusion.jpg"
                alt="Conculusion"
                style={{ marginBottom: "40px", width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              style={{
                padding: "10px",
                fontSize: "23x",
                whiteSpace: "pre-line",
                marginBottom: "120px",
              }}
            >
              <h1>Conclusion</h1>
              <p>
                In conclusion, the Amazing German Exam Simulation (AGES) project
                aims to revolutionize B1 Telc GermanExam preparation by
                providing an engaging, realistic, and efficient simulation of
                the exam. With a focus on user experience and comprehensive
                practice, AGES endeavors to be the go-to platform for
                individuals aiming for success in their language proficiency
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-3 col-6" style={cardStyle}>
            <div style={{ float: "right" }}>
              <LiaReadme style={{ width: "45px", height: "45px" }} />
            </div>
            <br />
            <br />
            <p>
              <b>Lesen Verstehen</b>
            </p>
            <div style={{ fontSize: "10px" }}>
              <p>
                Textverständnis übungen, Fragen zu Texten, Antworten finden,
                Lesekompetenz stärken
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6" style={cardStyle}>
            <div style={{ float: "right" }}>
              <FaRegQuestionCircle style={{ width: "45px", height: "45px" }} />
            </div>
            <br />
            <br />
            <p>
              <b>Sprachbausteine</b>
            </p>
            <div style={{ fontSize: "10px" }}>
              <p>
                Satzbausteine, Grammatik, Kommunikationsfähigkeiten
                verbessern,Wortschatz
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6" style={cardStyle}>
            <div style={{ float: "right" }}>
              <GrAssistListening style={{ width: "45px", height: "45px" }} />
            </div>
            <br />
            <br />
            <p>
              <b>Hören Verstehen</b>
            </p>
            <div style={{ fontSize: "10px" }}>
              <p>
                Hörverständnis übungen, Fragen beantworten , Hörtexte,
                Zuhörkompetenz stärken
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6" style={cardStyle}>
            <div style={{ float: "right" }}>
              <TfiWrite style={{ width: "45px", height: "45px" }} />
            </div>
            <br />
            <br />
            <p>
              <div style={{ fontSize: "13px" }}>
                <b>Schriftliche Ausdruck</b>
                <div style={{ fontSize: "10px" }}>
                  <p>
                    Schreibübungen, Textverfassen, Ausdrucksfähigkeit
                    verbessern, Schreibfertigkeit entwickeln.
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

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
