import logo from "../assets/logo.svg";
import "../styles/navbar.css";
const Navbar=()=>{
    return(
        <div className="navbar">
        <div className="left">
            <h1>GILLY&apos;S</h1>
            <p>Koramangala</p>
        </div>
        <div className="right">
            <img src={logo} alt="" />
        </div>
    </div>
    );
}

export default Navbar;