import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function ResultPageContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const fetchSavedAnswers = async () => {
    try {
      const token = await getAccessTokenSilently();
      const examId = sessionStorage.getItem("examId");

      if (examId) {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/results`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.error('Error fetching saved answers:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSavedAnswers();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ResultPageContent;
