import React from "react";
import Service from "../assets/Service.svg";
import Reading from "../assets/Reading.svg";

const Services = () => {
  return (
    <section className="mt-12 mx-4 ">
      <h1 className='text-primary text-[16px] mb-2 font-bold' id="service">SERVICES</h1>
      <h1 className="font-plus font-bold text-[26px] xs:text-4xl smd:text-[40px] md:text-5xl">
        🚀• The Services for You
      </h1>
      <div className="flex flex-col flex-wrap mt-5 sm:flex-row">
        <img src={Service} alt="" className="sm:w-[355px] sm:basis-1/2" />
        <div className="flex flex-col font-plus items-center sm:items-start justify-center sm:basis-1/2 md:pl-10 lgx:pl-14 xl:pl-20">
          <h1 className="text-2xl font-medium text-center sm:text-left xs:font-semibold -translate-y-6 smm:-translate-y-10 sm:-translate-y-6 md:text-[33px] lg:leading-[40px] lgx:text-4xl lgx:-translate-y-11 lgx:leading-[45px]">
            <span className="text-primary">Rent</span> your favorite book{" "}
            <br className="xs:hidden sm:flex" />
            fairly easy on <span className="text-primary">Lidia</span>!
          </h1>

          <p className="font-plus font-medium text-paragraph  max-w-80 xs:max-w-[390px] ss:max-w-[410px] smm:max-w-[430px] text-center sm:text-left -translate-y-3 smm:-translate-y-7 sm:-translate-y-2.5 sm:w-auto smd:max-w-[330px] md:text-lg md:max-w-[370px] md:-translate-y-1  lgx:-translate-y-5 lgx:max-w-[400px] text-sm sm:text-xs smd:text-sm lgx:text-base">
            Viewing, rent, and organize your favorite books has never been
            easier. An integrated digital library rent that’s simple to use,
            Lidia lets you spend less time managing your work and more time
            actually doing it!
          </p>

          <p className="font-plus font-medium text-paragraph  max-w-[350px] smm:max-w-[400px] text-center sm:text-left smm:-translate-y-3 sm:w-auto sm:-translate-y-1 smd:max-w-[330px] md:text-lg md:max-w-[370px] md:-translate-y-0 lgx:-translate-y-2 lgx:max-w-[400px] text-sm sm:text-xs smd:text-sm lgx:text-base">
            Effortless rentals, personalized shelves - Lidia transforms book
            management, enhancing your reading experience~
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse mt-5   ">
        <img src={Reading} alt="" className="sm:w-[355px] sm:basis-1/2" />
        <div className="flex flex-col font-plus items-center sm:items-start justify-center sm:basis-1/2 sm:ml-5 smd:ml-10 lgx:ml-14 xl:ml-16">
          <h1 className="text-2xl font-medium xs:font-semibold -translate-y-6 smm:-translate-y-10 sm:-translate-y-6 md:text-[33px] lg:leading-[40px] lgx:text-4xl lgx:leading-[45px] text-center sm:text-left">
            Quick Book Rentals:
            <br className="xs:hidden sm:flex" />
            <span className="text-primary">Dive</span> into{" "}
            <span className="text-primary">Reading</span> Instantly
          </h1>

          <p className="font-plus font-medium text-paragraph  max-w-80 xs:max-w-[390px] ss:max-w-[410px] smm:max-w-[430px] text-center sm:text-left -translate-y-3 smm:-translate-y-7 sm:-translate-y-3 smd:max-w-[330px] md:text-lg md:max-w-[370px] lgx:-translate-y-0 lgx:max-w-[400px] text-sm sm:text-xs smd:text-sm lgx:text-base">
            Discover instant literary delight. Access a vast library, borrow
            your favorite reads, and dive into captivating stories within
            minutes. Reading made quick and easy, just a click away!
          </p>

          <p className="font-plus font-medium text-paragraph max-w-[350px] text-center sm:text-left smm:max-w-[400px] smm:-translate-y-3 sm:-translate-y-1.5 smd:max-w-[330px] md:text-lg md:max-w-[370px] lgx:translate-y-2 lgx:max-w-[400px] text-sm sm:text-xs smd:text-sm lgx:text-base">
            Unlock a world of stories effortlessly. Browse genres, choose, rent
            in minutes. Seamlessly manage your reading adventures with our
            intuitive platform~
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
