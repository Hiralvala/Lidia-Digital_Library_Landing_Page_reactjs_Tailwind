import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants/constants";
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import Login from "../assets/Login.svg"

const Navbar = () => {
  const[toggle, setToggle]=useState(false)
  return (
    // <nav className="flex justify-between sm:w-[1200px] h-[43px] items-center  ">
    //   <div className="flex justify-between">
    //     <div className="flex w-[79px] h-[28px] items-center">
    //       <img src={logo} alt="" srcset="" className="w-[28px] h-[28px] mr-1" />
    //       <p className="font-plus font-bold text-lg leading-[22.68px]">Lidia</p>
    //     </div>

    //     <div className="h-[18px] md:ml-[120px] sm:ml-[85px]">
    //       <ul className="flex ">
    //         {navLinks.map((link) => (
    //           <li className="mx-10 ">
    //             <a
    //               href="#${link.id}"
    //               className="text-unactive hover:text-primary font-plus"
    //             >
    //               {link.title}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="w-[137px]  h-[43px] z-[3]">
    //     <button className="bg-white py-[9px] px-12 rounded-[10px]">
    //       <p className="text-Login font-plus font-bold text-base leading-[25px]">
    //         Login
    //       </p>
    //     </button>
    //   </div>
    // </nav>




    // <nav className="flex flex-1 justify-between w-screen h-[43px] items-center">
    //   <div className="flex justify-between">

    //     <div className="flex w-[79px] h-[28px] items-center">
    //        <img src={logo} alt="" srcset="" className="w-[28px] h-[28px] mr-1" />
    //        <p className="font-plus font-bold text-lg leading-[22.68px]">Lidia</p>
    //      </div>
         
    //         <ul className="hidden sm:flex h-[18px] lg:ml-[120px] md:ml-[72px] sm:ml-[48px] ">
    //          {navLinks.map((link) => (
    //            <li className="lg:mx-8 md:mx-6 sm:mx-4 ">
    //              <a
    //                href="#${link.id}"
    //                className="text-unactive hover:text-primary font-plus"
    //                >
    //                {link.title} 
    //              </a>
    //            </li>
    //          ))}
    //        </ul> 

    //     </div>
         
    //       <ul className="flex sm:hidden">
    //           {navLinks.map((link) => (
    //             <li className="mx-10 ">
    //               <a
    //                 href="#${link.id}"
    //                 className="text-unactive hover:text-primary font-plus"
    //               >
    //                 {link.title}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
         
    //         {/* <div className="w-[137px]  h-[43px] z-[3]">
    //           <button className="bg-white py-[9px] px-12 rounded-[10px]">
    //             <p className="text-Login font-plus font-bold text-base leading-[25px]">
    //               Login
    //             </p>
    //           </button>
    //         </div> */}
      
    // </nav>





    <nav className=" flex flex-1 w-screen h-[43px] my-3 px-5 items-center justify-between ">


      <div className="flex w-[79px] items-center z-[3] sm:hidden ">
            <img src={logo} alt="" srcset="" className="w-[34px] h-[34px] mr-2 " />
            <p className="font-plus font-bold sm:text-lg text-xl leading-[22.68px] ">Lidia</p>
        </div>

        <div className="flex sm:hidden">

          <div className="w-[34px] h-[34px] bg-gradient-to-br from-menu from-50% rounded-[50%] p-[1px] flex justify-center items-center mx-2">
            <img src={`${toggle?close:menu}`} alt="" className="w-[26px] h-[26px]  rounded-[50%] " onClick={()=>setToggle((prev)=>!prev)}/>
          </div>

          <div className={`absolute ${toggle?'flex':'hidden'} top-20 bg-white right-5 py-3 rounded-xl shadow-2xl z-20` }>
            <ul>
              {navLinks.map((link)=>(
                <li className="mx-5  ">
                               <a
                                href="#${link.id}"
                                 className="text-unactive hover:text-primary font-plus font-semibold"
                               >
                                 {link.title}
                               </a>
                            </li>
              ))}
            </ul>
          </div>

          <div className="w-[34px] h-[34px] bg-gradient-to-br from-menu from-50% rounded-[50%] p-[1px] flex justify-center items-center">
            <img src={Login} alt="" className="w-[26px] h-[26px]  rounded-[50%] " />
          </div>

        </div>

         {/* for large screen */}

        <div className="hidden sm:flex justify-between z-[2] ">
         <div className="flex w-[79px] h-[28px] items-center">
           <img src={logo} alt="" srcset="" className="w-[28px] h-[28px] mr-1 sm:border-white border rounded-full" />
           <p className="font-plus font-bold sm:text-base md:text-lg leading-[22.68px] lg:text-xl">Lidia</p>
         </div>

         <div className="h-[18px] md:ml-[120px] sm:ml-[25px] lg:ml-16">
           <ul className="flex flex-1">
             {navLinks.map((link) => (
              <li className="sm:mx-3 mx-10 md:mx-5 lg:mx-7">
                <a
                  href="#${link.id}"
                  className="text-unactive   hover:text-primary  font-plus text-base md:text-lg lg:text-xl"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-[137px]  h-[43px] z-[3] hidden sm:flex sm:w-[120px] lg:-translate-x-32">
        <button className="bg-white py-[9px] sm:px-8 rounded-[10px] lg:px-12">
          <p className="text-Login font-plus font-bold text-base leading-[25px] md:text-lg lg:text-xl">
            Login
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
