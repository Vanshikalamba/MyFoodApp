import { useState, useContext } from "react";
import { LOGO_URL, LOGO_URL2 } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to store
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center shadow-md bg-purple-400 text-white font-bold">
      <div className="logo-container">
        <Link to="/">
          <img className="m-2 w-[80px]" src={LOGO_URL2}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            <span>Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
          </li>
          <li className="px-4">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="px-4">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="px-4">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <button
            className="loginbtn px-2 py-1 bg-white text-black rounded-lg"
            onClick={() => {
              btnLogin === "Login"
                ? setbtnLogin("Logout")
                : setbtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/cart"
          >
            <li className="px-4 font-bold text-md">Cart👜({cart.length})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
