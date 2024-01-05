import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function NewsLetter() {
    const navigate = useNavigate();

    const signUp = () => {
        navigate("/about");
    };

    return (
        <section>
            <h3>Sign Up For Our Newsletter</h3>
            <button onClick={signUp}>Sign me up for hourly updates!</button>
        </section>
    );
}
