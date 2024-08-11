import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  return (
    <div className="w-full h-20 navbar flex items-center justify-evenly">
      <div className="logo">
        <img className="w-40" src={logo} alt="" />
      </div>
      <div className=" flex ">
        <ul className="flex space-x-4 font-caesar text-2xl">
          <li>
            <Link
              to="/about"
              className="text-white transition duration-150 ease-in hover:ease-in hover:text-green-500"
            >
              Workshops
            </Link>
          </li>
          <li>
            <Link
              to="/competition"
              className="text-white transition duration-150 ease-in hover:ease-in hover:text-green-500"
            >
              Competitions
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="text-white transition duration-150 ease-in hover:ease-in hover:text-green-500"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/accommodation"
              className="text-white transition duration-150 ease-in hover:ease-in hover:text-green-500"
            >
              Accommodation
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="text-white transition duration-150 ease-in hover:ease-in hover:text-green-500"
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white transition duration-150 ease-in hover:ease-in hover:text-green-500"
            >
              register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
