import { BusinessProcessData } from "../Plan/data";

const BussinessProcess = () => {
  return (
    <>
      <section className="h-fit text-center flex flex-col items-center justify-center w-full mt-10">
        <section className="2xl:w-[1700px]">
          <h1 className="text-5xl  max-md:text-4xl font-bold">
            The Selling Process
          </h1>
          <h2 className="text-2xl  mt-4 text-gray-600">
            Our Step-by-Step Guide
          </h2>
          <section className="grid grid-cols-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 px-14 mt-10">
            {BusinessProcessData.map(item => (
              <section
                key={item.id}
                className={`card flex flex-col items-center relative text-black  opacity-95 cursor-pointer hover:scale-110 transition-transform ease-in-out  hover:opacity-100 gap-5 border shadow px-2 py-5 w-full    rounded-2xl `}
                // style={{ backgroundColor: item.bg }}
              >
                <section className="w-14 h-14 bg-white  text-black text-xl absolute  shadow-black -right-3 flex items-center justify-center -top-5 rounded-full shadow">
                  0{item.id}
                </section>
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-20 w-20 object-cover "
                />
                <h2 className=" text-xl font-bold ">{item.title}</h2>
                <p className="text-center text-sm   text-balance">
                  {item.description}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default BussinessProcess;
