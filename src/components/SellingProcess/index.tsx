import { BuyingsData } from "../Plan/data";
// import { FaArrowRight } from "react-icons/fa6";
const SellingProcess = () => {
  return (
    <section className="h-fit flex flex-col items-center justify-center px-14 pb-2 my-20">
      <h1 className="text-5xl mb-4 font-bold max-md:text-4xl max-xs:text-3xl">
        The Buying Process
      </h1>
      <h2 className="text-2xl mb-10 text-gray-600">Our Step-by-Step Guide</h2>
      <div className="grid max-lg:grid-cols-2 2xl:grid-cols-4 grid-cols-3 max-sm:grid-cols-1 gap-5 justify-center text-center">
        {BuyingsData.map((item, index) => (
          <div
            key={index}
            className=" mt-10 border card flex   flex-col relative items-center justify-center cursor-pointer hover:scale-110 transition-transform ease-in-out  text-black p-5 "
          >
            <img
              src="./images/hexagon.png"
              alt=""
              className="relative h-[250px]"
            />
            <section className="absolute w-[150px]  flex f items-center flex-col justify-center gap-2 ">
              <img src={item.src} alt="" className="h-12 w-12" />

              <h3 className=" mt-5 font-bold text-sm">{item.title}</h3>
            </section>
            {/* {index < BuyingsData.length - 1 && (
              <FaArrowRight className="absolute -right-7" />
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellingProcess;
