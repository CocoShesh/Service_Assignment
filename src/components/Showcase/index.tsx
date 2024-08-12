import { showcaseData, ImageData } from "../Plan/data";

const Showcase = () => {
  return (
    <>
      <section className="flex flex-col  justify-center items-center w-full h-fit px-4 md:px-14 mt-10 md:mt-20 pb-10 ">
        <section className="2xl:w-[1600px]">
          {showcaseData?.slice(0, 2).map(data => {
            const isEven = data.id % 2 !== 0;
            return (
              <section
                key={data.id}
                className="flex flex-col relative h-fit items-center gap-5 w-full cursor-pointer"
              >
                <section
                  className={`flex ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } flex-col-reverse h-fit w-full`}
                >
                  <section className="flex flex-col gap-5 w-full">
                    <section className=" p-8 mt-5">
                      <h2 className="text-2xl md:text-4xl font-bold">
                        {data.title}
                      </h2>
                      {Array.isArray(data?.description) &&
                        data?.description.map((desc, index) => (
                          <ul
                            key={index}
                            className="list-disc mt-3 md:mt-5 pl-5 md:pl-10 2xl:text-2xl text-[#79797c]"
                          >
                            <li>{desc}</li>
                          </ul>
                        ))}
                    </section>
                  </section>
                  <section className="w-full h-fit">
                    <img
                      src={data.src}
                      alt={data.title}
                      className="object-cover w-full h-fit "
                    />
                  </section>
                </section>
              </section>
            );
          })}

          <section className="flex      ">
            {ImageData.map(data => (
              <section
                key={data.id}
                className="flex flex-col items-center w-full relative text-center  h-fit cursor-pointer  shadow-md"
              >
                <img
                  src={data.src}
                  alt={data.title}
                  className="object-cover w-full h-fit "
                />
                <h2 className="text-2xl text-white absolute bottom-3 left-0  right-0 max-sm:text-sm">
                  {data.title}
                </h2>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Showcase;
