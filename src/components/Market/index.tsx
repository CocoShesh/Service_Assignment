import { MarketData } from "../Plan/data";
const Market = () => {
  return (
    <>
      <section className=" h-fit   flex  relative  justify-center  text-center w-full  bg-no-repeat  bg-estate  bg-cover before:bg-black before:absolute before:top-0 before:w-full  before:opacity-20  text-white before:h-full before:left-0  ">
        <section className="  2xl:w-[1700px]  pt-10  z-10  w-full   px-20 max-sm:px-8 flex flex-col h-full items-center   justify-between">
          <section>
            <h1 className=" text-6xl   max-md:text-5xl font-bold">
              We Market Your Home to The World
            </h1>
            <h2 className="text-4xl max-md:text-2xl">
              Our Online Marketing Strategy
            </h2>
            <p className="mt-5 2xl:text-2xl">
              ​​​​​​​The Bay Area remains one of the world's most sought-after
              regions to live in, and when looking to sell, it is vital that
              your home be marketed online to audiences locally, nationally, and
              internationally.
            </p>{" "}
            <section className="flex gap-5 mt-10   w-full max-xl:grid max-xl:grid-cols-2 max-md:grid-cols-1">
              {MarketData.map(item => (
                <section
                  key={item.id}
                  className="flex card   flex-col items-center w-full  bg-white p-5 rounded-lg   text-black   gap-5 mt-5"
                >
                  <img src={item.src} alt="" className="h-20 w-20" />
                  <section>
                    <h2 className="text-xl text-center 2xl:text-3xl  font-bold">
                      {item.title}
                    </h2>
                    <p className="mt-10  text-sm 2xl:text-2xl">
                      {item.description}
                    </p>
                  </section>
                </section>
              ))}
            </section>
          </section>
          <img
            src="./images/image-057.webp"
            alt=""
            className="w-[200px] py-5"
          />
        </section>
      </section>
    </>
  );
};

export default Market;
