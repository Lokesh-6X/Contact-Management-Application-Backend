import { Link } from "react-router-dom";
import { useState } from "react";

function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { username, email, password };

        try {
        console.log(userData);
        const response = await fetch("api/users/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("✅ Registration successful!");
            setUsername("");
            setEmail("");
            setPassword("");
        } else {
            setMessage("❌ " + data.message);
        }
        } catch (error) {
        setMessage("⚠️ Error connecting to server", error);
        }
    };

    return(
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="inputs">
                    <div className="input">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
                    <div className="input">
                        <input 
                            type="email"   
                            placeholder="Email Adderss"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="input">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                </div>
                <button type="submit" className="login-pg-btn">Register</button>
                <p>Aldredy Have an Account? <Link to="/login">Login</Link></p>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Register;