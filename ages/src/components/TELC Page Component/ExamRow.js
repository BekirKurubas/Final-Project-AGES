const ExamRow = () => {
  return (
    <>
      <div className="col-md-6 mb-5">
        <div
          style={{
            padding: "10px",
            fontSize: "12px",
            whiteSpace: "pre-line",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
            }}
          >
            Telc German Examinations
          </h1>
          <br />
          <p style={{
              fontSize: "19px",
            }}>
            Telc offers a wide range of language certificates from A1 to C2 to
            help you demonstrate language ability in any situation. telc German
            examinations address different target groups at different stages of
            life. For children, teenagers and young adults, telc’s German range
            include Junior, School and University examinations catering for
            levels A1 to C1. For adults the range focuses on general or vocation
            language skills, across all CEFR levels. Specialist examinations are
            available for those working in the fields of medicine and nursing.
            Dual-level examinations are also available, assessing language
            skills at two levels of competence. All telc examinations focus on
            using language for effective communication. Connecting with people
            around the world, understanding others, being understood, and using
            your skills confidently in real-life situations is the key to
            success. telc helps you get there.
          </p>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="row">
          <div style={{ padding: "20px" }}>
            <img
              src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/telc2.png"
              alt="telc 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExamRow;
