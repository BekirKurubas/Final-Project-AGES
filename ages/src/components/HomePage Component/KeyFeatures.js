const KeyFeaturesRow = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mb-4">
        <div
  style={{
    padding: "10px",
    fontSize: "21px",
    whiteSpace: "pre-line",
  }}
>
  <h1 style={{ fontSize: "50px" }}>Key Features</h1>
  <br />
  <p>AGES will offer the following key features:</p>
  <ol>
    <li>
      Section-specific Practice: Users can focus on specific sections, such as
      "Lesen Verstehen" and "Sprachbausteine," tailoring their practice
      sessions to their needs.
    </li>
    <li>
      Real-time Clock: A visible countdown timer will be present, ensuring users
      adhere to the time constraints of the actual exam.
    </li>
    <li>
      Interactive Answer Forms: Users can interactively select answers for each
      question, receiving after test feedback on their choices.
    </li>
    <li>
      Performance Analytics: Detailed analytics will showcase users' strengths
      and areas for improvement, aiding in targeted study sessions.
    </li>
  </ol>
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
  );
};
export default KeyFeaturesRow;
