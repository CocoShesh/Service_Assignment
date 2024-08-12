import { ServiceData } from "../Plan/data";

const About = () => {
  return (
    <>
      <section className="h-fit w-full text-center mt-10 px-6 lg:px-14 mb-24 lg:mb-44">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Over 33 Years of Real Estate Success
        </h1>
        <h2 className="text-lg lg:text-xl mt-3">
          Discover How Our Expertise, Tailored Strategies, and Innovative Tools
          Make a Difference
        </h2>

        <section className="my-10 lg:my-14 w-full h-full">
          {ServiceData.map(data => {
            const isEven = data.id % 2 !== 0;
            return (
              <section
                key={data.id}
                className="flex flex-col items-center w-full cursor-pointer mb-10 lg:mb-0"
              >
                <section
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } w-full h-fit`}
                >
                  <section className="flex flex-col items-center lg:items-start justify-center p-5 max-sm:pb-14 w-full lg:w-1/2">
                    <section className="px-3 py-1 mt-5 lg:mt-0">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-5">
                        {data.title}
                      </h2>
                    </section>

                    <ul className="list-disc text-left pl-6 2xl:text-2xl lg:pl-10 mt-5">
                      {data?.item?.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </section>
                  <img
                    src={data.src}
                    alt={data.title}
                    className="w-full lg:w-1/2 object-contain"
                  />
                </section>
              </section>
            );
          })}
        </section>

        <p className="text-lg 2xl:text-2xl">
          We believe that{" "}
          <span className="text-blue-500 font-semibold">transparency</span> and{" "}
          <span className="text-blue-500 font-semibold">
            guiding you and your family
          </span>{" "}
          through the process is key to having the best experience. During these{" "}
          <span className="text-red-500 font-semibold">uncertain times</span>,
          it is a good feeling to know you have someone with a{" "}
          <span className="text-green-500 font-semibold">
            proven track record
          </span>{" "}
          you can count on. We will be here to handle your needs during the{" "}
          <span className="text-green-500 font-semibold">
            Real Estate process
          </span>
          . We think of it before a need even arises. Because, that is just what
          we do.{" "}
          <span className="text-orange-500 font-semibold">
            Who you work with does matter!
          </span>
        </p>
      </section>
    </>
  );
};

export default About;
