const ExecutiveSummaryRow = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            style={{
              padding: "10px",
              fontSize: "16px",
              whiteSpace: "pre-line",
              marginTop: "20px",
            }}
          >
            <h1>Executive Summary</h1>
            <p>
              The Amazing German Exam Simulation (AGES) project aims to provide
              users with a comprehensive and user-friendly web application to
              simulate the model test of Telc B1 German “Telc B1 Deutsch Prüfung
              Model Test”. The application will specifically focus on the "Lesen
              Verstehen," "Sprachbausteine," and "Hören Verstehen" sections of
              the exam, allowing users to practice effectively.
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
  );
};
export default ExecutiveSummaryRow;