import React, { useEffect, useState } from "react";
import ExecutiveSummaryRow from "./ExecutiveSummaryRow";
import HomePagePictureRow from "./HomePagesPictureRow";
import GoalsRow from "./GoalsRow";
import KeyFeaturesRow from "./KeyFeatures";
import ConclusionRow from "./ConclusionRow";
import IconsCardRow from "./IconsCardRow";
import AufbauRow from "./AufbauRow";
import ClientRow from "./ClientRow";
import PersonCardsRow from "./PersonCardsRow";

const Content = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_API_ENDPOINT;

    fetch(`${backendUrl}/exam`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setExams(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <HomePagePictureRow />      

      <ExecutiveSummaryRow />

      <GoalsRow />

      <KeyFeaturesRow />

      <ConclusionRow />

      <IconsCardRow />

      <AufbauRow />

      <ClientRow />

      <PersonCardsRow />
      <div>
        <h1>Exam List</h1>
        <ul>
          {exams.map(exam => (
            <li key={exam.id}>{exam.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Content;
