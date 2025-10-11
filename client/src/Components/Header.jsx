import { Link } from "react-router-dom";

function Header(){
  return (
    <nav className="navbar">
      <div className="logo">Conatct Managemnet Application</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header;