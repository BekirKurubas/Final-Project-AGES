import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");



const StartExamButton = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit Start Exam")

        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                    // Add any additional headers if needed
                },
            });
            console.log(response)
            navigate('/exam-page-1');
            // Handle response data as needed
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            // Handle error
        }
    };

    return (
        isAuthenticated && (
            // <Link to="/start-exam" style={{ color: "white" }}>
            <button
                className="btn btn-primary btn-lg"
                type="submit"
                onClick={handleSubmit}
                style={{
                    marginBottom: "10px",
                    width: "100%",
                    backgroundColor: "red",
                }}>
                Start Exam
            </button>
            // </Link >

        ))
}

export default StartExamButton;