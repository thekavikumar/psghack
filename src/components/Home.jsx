import React from "react";
import Banner from "../assets/banner.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="font-bold text-gray-900 text-[45px]">
            Welcome to DIGI-CS
          </h1>
          <h1 className="font-bold text-gray-900 -mt-4 text-[45px]">
            Do transaction paperless
          </h1>
          <p className="font-semibold text-gray-700 text-[30]px">
            The DIGI-CS is an online platform that enables the issuance and
            payment of traffic violation fines electronically. This system aims
            to streamline the process of fine collection, reduce corruption, and
            increase transparency.
          </p>
          <div className="flex items-center gap-5 mt-5">
            <Link to="/manage">
              <button className="btn1">
                <span className="btnspan">Manage</span>
              </button>
            </Link>
            <Link to="/transaction">
              <button className="btn1">
                <span className="btnspan">Do Transactions</span>
              </button>
            </Link>
          </div>
        </div>
        <img
          className="w-[500px] h-[500px] object-contain "
          src={Banner}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Home;
