import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate =useNavigate()
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? <>{user.username} <button onClick={()=>{dispatch({ type: "LOGOUT" });}}>Logout</button> </>  : (
          <div className="navItems">
            <button onClick={()=>navigate("/register")} className="navButton">Register</button>
            <button onClick={()=>navigate("/login")} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
