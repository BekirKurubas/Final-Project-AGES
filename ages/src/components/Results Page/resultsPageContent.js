import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../../../src';
import { useNavigate } from 'react-router-dom';

function ResultPageContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

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
          navigate('/start-exam')
          sessionStorage.setItem('examId', undefined);
        }

        const data = await response.json();
        setData(data);
        // sessionStorage.setItem('examId', undefined);
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

  let questionNumber = 1;

  const calculateTotal = (data) => {
    let totalCorrect = 0;
    let totalFalse = 0;
    let totalEmpty = 0;

    data.resultsWithCorrectAnswers.forEach(result => {
      result.questions.forEach(question => {
        if (!question.answer) {
          totalEmpty++;
        } else if (question.answer === question.correctAnswer) {
          totalCorrect++;
        } else {
          totalFalse++;
        }
      });
    });

    return { totalCorrect, totalFalse, totalEmpty };
  };

  const { totalCorrect, totalFalse, totalEmpty } = calculateTotal(data);
  const totalQuestions = totalCorrect + totalFalse + totalEmpty;
  const correctPercentage = ((totalCorrect / totalQuestions) * 100).toFixed(2);
  const falsePercentage = ((totalFalse / totalQuestions) * 100).toFixed(2);
  const emptyPercentage = ((totalEmpty / totalQuestions) * 100).toFixed(2);

  const pieData = {
    labels: ['Correct', 'False', 'Empty'],
    datasets: [
      {
        data: [totalCorrect, totalFalse, totalEmpty],
        backgroundColor: ['#4CAF50', '#F44336', '#2196F3'],
        hoverBackgroundColor: ['#66BB6A', '#EF5350', '#42A5F5']
      }
    ]
  };

  return (
    <div className="result-page" style={{ margin: '0 200px' }}>
      {data.resultsWithCorrectAnswers.map((result, index) => (
        <div key={index} className="section" style={{ marginBottom: '20px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', margin: '20px 0' }}>{result.title}</h2>
          <table className="result-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px' }}>Question Number</th>
                <th style={{ padding: '8px' }}>User's Answer</th>
                <th style={{ padding: '8px' }}>Correct Answer</th>
                <th style={{ padding: '8px' }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {result.questions.map((question, idx) => (
                <tr key={idx}>
                  <td style={{ padding: '8px' }}>{questionNumber++}</td>
                  <td style={{ padding: '8px' }}>{question.answer || 'Empty'}</td>
                  <td style={{ padding: '8px' }}>{question.correctAnswer}</td>
                  <td className={question.answer === question.correctAnswer ? 'correct' : (question.answer ? 'incorrect' : 'empty')} style={{ padding: '8px' }}>
                    {getAnswerIcon(question.answer, question.correctAnswer)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <table className="summary-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px' }}>Total Correct</th>
            <th style={{ padding: '8px' }}>Total False</th>
            <th style={{ padding: '8px' }}>Total Empty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', textAlign: 'center' }}>{totalCorrect}</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>{totalFalse}</td>
            <td style={{ padding: '8px', textAlign: 'center' }}>{totalEmpty}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
        <Pie data={pieData} />
        <div style={{ marginTop: '10px' }}>
          <p style={{ color: '#4CAF50' }}>{`%${correctPercentage} Correct`}</p>
          <p style={{ color: '#F44336' }}>{`%${falsePercentage} False`}</p>
          <p style={{ color: '#2196F3' }}>{`%${emptyPercentage} Empty`}</p>
        </div>
      </div>
    </div>
  );
}

function getAnswerIcon(answer, correctAnswer) {
  if (answer === correctAnswer) {
    return <span style={{ color: 'green' }}>&#10004;</span>;
  } else if (answer) {
    return <span style={{ color: 'red' }}>&#10008;</span>;
  } else {
    return <span style={{ color: 'blue' }}>Empty</span>;
  }
}

export default ResultPageContent;