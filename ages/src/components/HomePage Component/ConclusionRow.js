const ConclusionRow = () => {
  return (
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
              fontSize: "30px",
              whiteSpace: "pre-line",
              marginBottom: "120px",
            }}
          >
            <h1 style={{fontSize:"50px"}}>Conclusion</h1>
            <br></br>
            <p>
              In conclusion, the Amazing German Exam Simulation (AGES) project
              aims to revolutionize B1 Telc German Exam preparation by providing
              an engaging, realistic, and efficient simulation of the exam. With
              a focus on user experience and comprehensive practice, AGES
              endeavors to be the go-to platform for individuals aiming for
              success in their language proficiency journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConclusionRow;
