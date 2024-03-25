import React, { useState, useEffect } from "react";

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
      <div
        className="container-fluid"
        style={{
          marginTop: "10px",
          maxWidth: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <img
          src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/AGES.png"
          alt="AGES"
          style={{ marginTop: "10px", width: "100%", height: "auto" }}
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              style={{
                padding: "20px",
                fontSize: "18px",
                whiteSpace: "pre-line",
              }}
            >
              <h1>Executive Summary</h1>
              <p>
                The Amazing German Exam Simulation (AGES) project aims to
                provide users with a comprehensive and user-friendly web
                application to simulate the model test of Telc B1 German “Telc
                B1 Deutsch Prüfung Model Test”. The application will
                specifically focus on the "Lesen Verstehen," "Sprachbausteine,"
                and "Hören Verstehen" sections of the exam, allowing users to
                practice effectively.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="row">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/summary-writing.jpg"
                  alt="Summary Writing"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div style={{ padding: "20px" }}>
              <img
                src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/goals.jpg"
                alt="Goals"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              style={{
                padding: "20px",
                fontSize: "14px",
                whiteSpace: "pre-line",
              }}
            >
              <h1>Goals</h1>
              <p>
                · Effective Exam Simulation: AGES aims to provide users with a
                realistic simulation of the B1 Deutsch Telc Prüfung, ensuring
                that they are well-prepared for the actual exam environment.
                <br />
                · User Engagement and Retention: The project targets a 30%
                increase in user engagement over the first three months,
                achieved through interactive features and personalized feedback.
                <br />· Time-Efficient Practice: The project aims to help users
                efficiently manage their time during the "Lesen Verstehen" and
                "Sprachbausteine" sections, providing them with a practice
                environment that mirrors the actual exam duration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          marginTop: "10px",
          maxWidth: "100%",
          margin: "0",
          padding: "0",
        }}
      ></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              style={{
                padding: "20px",
                fontSize: "14px",
                whiteSpace: "pre-line",
              }}
            >
              <h1>Key Features</h1>
              <p>
                AGES will offer the following key features: 1. Section-specific
                Practice: Users can focus on specific sections, such as "Lesen
                Verstehen" and "Sprachbausteine," tailoring their practice
                sessions to their needs. 2. Real-time Clock: A visible countdown
                timer will be present, ensuring users adhere to the time
                constraints of the actual exam. 3. Interactive Answer Forms:
                Users can interactively select answers for each question,
                receiving after test feedback on their choices. 4.Performance
                Analytics: Detailed analytics will showcase users' strengths and
                areas for improvement, aiding in targeted study sessions.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="row">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/key-features.jpg"
                  alt="Key-Feautures"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
                padding: "20px",
                fontSize: "22x",
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
      <div className="text-center" style={{ marginBottom: "120px" }}>
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
