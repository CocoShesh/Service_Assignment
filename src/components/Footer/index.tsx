import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="flex gap-10 h-fit 2xl:w-[1700px] pb-10 px-14 items-center justify-center  max-lg:px-8 max-lg:flex-col ">
        <section className="w-full">
          <h1 className="text-3xl font-bold mb-5">Julie Hansen Partnership</h1>
          <p>
            An elite group of the East Bay’s most talented and visionary real
            estate professionals believed buyers and sellers deserved more from
            their real estate company. More service. More resources. More
            integrity. More global reach. In a word, more of everything people
            should expect when they buy or sell their homes.
          </p>
        </section>
        <section className="w-full flex flex-col gap-3  2xl:pl-10">
          <h1 className="text-xl font-bold"> ADDRESS</h1>
          <section className="flex gap-3">
            <img src="./images/Location.svg" alt="" />
            <span> 4733 Chabot Drive #100 Pleasanton, CA 94588</span>
          </section>
          <h1 className="text-xl font-bold"> CONTACT INFORMATION</h1>
          <section className="flex gap-3">
            <img src="./images/contact.svg" alt="" />
            <span> (925) 553-6707</span>
          </section>
          <section className="flex gap-3">
            <img src="./images/email.svg" alt="" />
            <span> luxuryhomesinwc@icloud.com</span>
          </section>

          <span> ​​​​​​​Julie Hansen-Orvis | CA DRE# 00934447</span>
        </section>
        <section className="w-full flex flex-col   gap-8 text-2xl">
          <section className="flex gap-3">
            <FaFacebook />
            <FaLinkedin />
          </section>
          <section className="flex  items-center gap-5 h-8 mt-3">
            <img src="./images/logo1.webp" alt="" className="h-8" />
            <img src="./images/logo2.webp" alt="" className="h-8" />
            <img src="./images/logo3.webp" alt="" className="h-5" />
          </section>
          <section className="text-lg mt-2 max-lg:mb-5">
            <span>Copyright 2024 | Privacy Policy </span> <br />
            <span> Website Redesigned& Developed by Glenard Becerro</span>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
