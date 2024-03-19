import React from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  return (
    <nav className="flex  justify-between w-[1200px] h-[43px] items-center">
      <div className="flex  justify-between">
        <div className="flex w-[79px] h-[28px] items-center">
            

          <img
            src={logo}
            alt=""
            srcset=""
            className="w-[28px] h-[28px] mr-1"/>
      <p className="font-plus font-bold text-lg leading-[22.68px]">Lidia</p>
        </div>

        <div className="h-[18px] ml-[120px]">
          <ul className="flex ">
            {navLinks.map((link) => (
              <li className="mx-10 ">
                <a
                  href="#${link.id}"
                  className="text-unactive hover:text-primary font-plus"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-[137px]  h-[43px] z-[3]">
        <button className="bg-white py-[9px] px-12 rounded-[10px]">
          <p className="text-Login font-plus font-bold text-base leading-[25px]">Login</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
