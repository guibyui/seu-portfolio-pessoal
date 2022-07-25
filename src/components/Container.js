import React from "react";
import { Link } from "react-router-dom";

import { FaTools, FaStreetView, FaPhoneSquareAlt } from "react-icons/fa";

import "../styles/index-page.css";

// import avatar from "../assets/avatar.jpeg";

const Container = ({ children }) => {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <section className="glass backdrop-blur-sm bg-white/60 w-1120 rounded-3xl flex flex-col md:flex-row z-10">
          <div className="dashboard flex flex-1 flex-col items-center justify-evenly rounded-3xl">
            <div className="user flex flex-col items-center">
              <img src='#' className="w-32 rounded-full" alt="" />
              <h3 className="text-blueish font-semibold opacity-80">
                Your Name
              </h3>
              <p className="text-lightBlueish font-medium opacity-80">
                Your Title
              </p>
            </div>
            <div className="links">
              {/* <div className="link flex my-8 mx-auto py-4 px-20 items-center">
                <img src={twitch} alt="" />
                <Link to='/' className="text-lightBlueish font-medium opacity-80 py-0 px-8">
                  Home
                </Link>
              </div> */}
              <div className="link flex my-8 mx-auto py-4 px-20 items-center">
                <FaTools className="icon w-8" />
                <Link
                  to="/my-services"
                  className="text-lightBlueish font-medium opacity-80 py-0 px-8"
                >
                  Meus Serviços
                </Link>
              </div>
              <div className="link flex my-8 mx-auto py-4 px-20 items-center">
                <FaStreetView className="icon" />
                <Link
                  to="/about-me"
                  className="text-lightBlueish font-medium opacity-80 py-0 px-8"
                >
                  Sobre Mim
                </Link>
              </div>
              <div className="link flex my-8 mx-auto py-4 px-20 items-center">
                <FaPhoneSquareAlt className="icon" />
                <Link
                  to="/lets-talk"
                  className="text-lightBlueish font-medium opacity-80 py-0 px-8"
                >
                  Vamos Conversar!
                </Link>
              </div>
            </div>
            <div className="pro rounded-3xl text-white p-4 relative">
              <h2 className="text-white font-semibold py-0 px-8">
                Entre em contato para agendar sua consulta agora!
              </h2>
              {/* <img
                className="absolute -top-10 right-10"
                src={controller}
                alt=""
              /> */}
            </div>
          </div>
          <div className="games m-20 flex flex-col justify-evenly flex-[2_1_0%]">
            {children}
          </div>
        </section>
      </main>
      <div className="circle1 bg-white h-20rem w-80 absolute rounded-full top-2/4 right-1/3"></div>
      <div className="circle2 bg-white h-20rem w-80 absolute rounded-full bottom-2/4 left-1/3"></div>
    </>
  );
};

export default Container;
