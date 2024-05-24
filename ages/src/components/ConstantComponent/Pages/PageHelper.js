import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const { getAccessTokenSilently } = useAuth0();
const navigate = useNavigate();



const submitPage = async (getAccessTokenSilently, selectedOptions, pageNumber, navigationPath) => {
    try {
        const token = await getAccessTokenSilently();
        const examId = sessionStorage.getItem("examId");

        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                pageNumber: pageNumber,
                answers: selectedOptions.map((sO, index) => ({ answerNumber: index + 1, answer: sO }))
            })
        });

        if (response.ok) {
            navigate(navigationPath);
        } else {
            console.error('Failed to submit answers');
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

// const submitPage = async (e) => {
//     e.preventDefault();
//     // const pageCreate = {
//     //     pageNumber: number
//     //     answers: [{
//     //         answerNumber:
//     //         answer:
//     //     }]

//     try {

//         console.log(selectedOptions);

//         const token = await getAccessTokenSilently();
//         const examId = sessionStorage.getItem("examId");

//         const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page`, {
//             method: "Post",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//                 // Add any additional headers if needed
//             },
//             body: JSON.stringify({
//                 pageNumber: 1,
//                 answers:
//                     selectedOptions.map((sO, index) => { return { answerNumber: index + 1, answer: sO } })

//             })
//         });
//         navigate('/exam-page-2');
//         // Handle response data as needed
//     } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//         // Handle error
//     }
// };

const getPage = async (getAccessTokenSilently, pageId) => {
    try {
        console.log("fetch");
        const examId = sessionStorage.getItem("examId");

        const token = await getAccessTokenSilently();

        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page/${pageId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log("hello");
            const savedAnswers = data.map((d) => d.answer);
            console.log(savedAnswers);
            return savedAnswers;
        } else {
            console.error('Failed to fetch saved answers');
            return null;
        }
    } catch (error) {
        console.error('Error fetching saved answers:', error);
        return null;
    }
}


export { submitPage, getPage }