import React, {Link} from "react";
import { useAuth0 } from "@auth0/auth0-react";

// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");



const StartExamButton = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Link to="/start-exam" style={{ color: "white" }}>
                <button
                    className="btn btn-primary"
                    style={{
                        marginTop: "50px",
                        width: "220px",
                        backgroundColor: "red",
                    }}>
                    Start Exam
                </button>
            </Link >
        ))
}

export default StartExamButton;