import { marketingData } from "./data";

const Plan = () => {
  return (
    <>
      <section className="flex flex-col mt-52 justify-center items-center px-14 w-full  max-md:mx-5 h-fit">
        <section className="2xl:w-[1700px] ">
          <h1 className="text-4xl max-md:text-center max-md:text-3xl">
            Comprehensive Marketing Plan
          </h1>
          <section className="flex gap-5 my-16  max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 ">
            {marketingData.map(data => (
              <section
                key={data.id}
                className="flex flex-col items-center gap-5 w-full border-2     cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 p-3 rounded-lg shadow-md"
              >
                <img
                  src={data.src}
                  alt={data.title}
                  className="h-40 w-40 object-cover rounded-full"
                />
                <h2 className="font-bold text-xl">{data.title}</h2>
                <p className="text-center text-[#525252] text-balance">
                  {data.description}
                </p>
              </section>
            ))}
          </section>

          <section className="flex justify-center items-center w-full h-[350px] max-lg:h-fit border  max-lg:flex-col-reverse max-lg:pl-0   text-black  pl-14 gap-10  rounded-lg">
            <section className="  w-full max-lg:p-5">
              <h2 className="text-5xl font-bold mb-4">
                Your Property Deserves the Best
              </h2>
              <p className="text-lg text-[#525252]">
                Our marketing plan is designed to give your property the
                exposure it needs to attract the right buyers. From stunning
                photography to global syndication, we've got you covered.
              </p>
            </section>
            <img
              src="./images/page-3.jpg"
              alt="Marketing Plan Background"
              className="w-full h-full object-cover rounded-r-lg"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Plan;
