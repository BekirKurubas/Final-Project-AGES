import { LiaReadme } from "react-icons/lia";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrAssistListening } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";

const IconsCardRow = () => {
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
                  Schreibübungen, Textverfassen, Ausdrucksfähigkeit verbessern,
                  Schreibfertigkeit entwickeln.
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default IconsCardRow;
