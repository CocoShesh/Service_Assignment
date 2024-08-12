import { HiOutlineMail } from "react-icons/hi";
const Newsletter = () => {
  return (
    <>
      <section className="h-[550px] mb-20 w-full   flex  items-center justify-center max-md:flex-col gap-10 px-14  py-10  max-md:px-0 max-lg:h-fit bg-[#888e93] text-white ">
        <img
          src="./images/newsletter.png"
          alt=""
          className="w-full  2xl:w-[900px] object-contain"
        />
        <section className="w-full 2xl:w-full gap-5 flex 2xl:px-32 flex-col items-center justify-center pl-20 max-md:px-5 max-md:w-full">
          <h1 className="text-left text-4xl font-bold">
            Subscribe to our Newsletter!
          </h1>
          <p>
            Be the first to get exclusive offers by subscribing to our
            newsletter.
          </p>
          <section className="relative w-full ">
            <HiOutlineMail className="absolute top-4 left-2 text-2xl text-black " />
            <input
              type="email"
              className="w-full h-14 border  pl-10 "
              placeholder="Enter your email address"
            />
          </section>
          <button className="w-full h-14  bg-black text-white ">
            Subcribe Now
          </button>
        </section>
      </section>
    </>
  );
};

export default Newsletter;
