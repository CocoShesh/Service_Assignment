import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <section className="h-[520px] max-md:h-[800px] w-full relative flex    items-center justify-center before:bg-black before:opacity-30 before:absolute before:w-full before:h-full">
        <img
          src="/images/Hero.jpg"
          className="h-full w-full object-cover"
          alt=""
        />
        <section className="absolute bottom-0 max-sm:-bottom-5  h-[500px] w-[700px]  max-md:h-fit max-md:w-full    text-center flex-col gap-5">
          <h1 className="text-white text-7xl font-serif mt-10">Services</h1>
          <img
            src="./images/security.png"
            alt=""
            className=" absolute top-28 left-0 right-0 h-20  mx-auto  drop-shadow-lg"
          />
          <section className="w-full h-full bg-[#ebf2f3] shadow rounded-lg mt-10  ">
            <div className=" w-full h-5 rounded-t-lg"></div>
            <section className="p-5">
              <h1 className="text-2xl font-bold mt-5">
                Enter an address or area to find services in your location.
              </h1>

              <section className="relative mt-10">
                <input
                  type="text"
                  value=""
                  className="w-full h-14 rounded-md border bg-white text-black outline-none pl-10 text-lg shadow"
                  placeholder="Search by Address or Area"
                />
                <IoSearch className="absolute top-5 left-3 text-lg text-[#bdb1b4]" />
              </section>
              <button className="bg-black text-white  w-[300px] mt-5 text-lg h-14 transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500 hover:scale-105 rounded-md">
                BOOK AN APPOINTMENT
              </button>

              <p className="mt-10">
                We provide every one of our clients with a level of service they
                won’t find anywhere else. We give them what they need, often
                before they know they need it. ​​​​​​​In real estate, almost
                everything can be negotiated. When you choose Hansen Partners It
                is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an
                experience like no other.
              </p>
            </section>
            <section className="flex gap-5 items-center justify-center mt-5 flex-wrap max-sm:pb-5">
              <img src="./images/investors1.png" alt="" className="h-8" />
              <img src="./images/investors2.png" alt="" className="h-8" />
              <img src="./images/investors3.png" alt="" className="h-8" />
              <img src="./images/logo1.webp" alt="" className="h-8" />
              <img src="./images/logo2.webp" alt="" className="h-8" />
              <img src="./images/logo3.webp" alt="" className="h-5" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
