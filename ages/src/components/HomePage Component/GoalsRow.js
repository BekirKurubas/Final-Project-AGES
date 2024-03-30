const HomePageGoalsRow = () => {
  return (
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
              padding: "10px",
              fontSize: "13px",
              whiteSpace: "pre-line",
            }}
          >
            <h1>Goals</h1>
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
