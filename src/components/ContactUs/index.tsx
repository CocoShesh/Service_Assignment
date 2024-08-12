const ContactUs = () => {
  return (
    <>
      <section className="w-full flex px-14 max-md:px-5 py-20 2xl:w-[1700px] items-center  gap-20 h-fit max-lg:flex-col bg-contact bg-center bg-no-repeat bg-contain justify-center ">
        <section className="w-full flex flex-col gap-5">
          <h1 className="text-6xl">Contact us</h1>
          <p className="text-lg">
            With decades of experience in luxurious Tri Valley real estate, our
            team is here to ensure that your dreams are a reality. Let us guide
            you through your home buying journey, contact us today!
          </p>

          <section className="flex flex-col gap-5   ">
            <section className="flex gap-3 ">
              <img src="./images/contact.svg" alt="" />
              <span className="text-xl">(925) 553-6707</span>
            </section>
            <section className="flex gap-3">
              <img src="./images/email.svg" alt="" />
              <span className="text-xl">luxuryhomesinwc@icloud.com</span>
            </section>
            <section className="flex gap-3">
              <img src="./images/Location.svg" alt="" />
              <span>
                4337 Chabot Drive, Pleasanton, CA 94588Julie Hansen-Orvis | CA
                DRE# 00934447
              </span>
            </section>
          </section>
          <span className="text-xl mt-5"> Interested in exploring more? </span>
          <button className="h-14 w-[220px]  rounded-lg bg-black text-white transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500 hover:scale-105">
            Book an appointment
          </button>
        </section>
        <section className="w-full bg-white border h-full p-8  rounded-lg  ">
          <form>
            <section className="flex w-full gap-5 max-md:flex-col">
              <div className="w-full">
                <label htmlFor="firstname">First name</label> <br />
                <input type="text" className="w-full h-10  border" />
              </div>
              <div className="w-full">
                <label htmlFor="firstname">Last name</label> <br />
                <input type="email" className="w-full h-10  border" />
              </div>
            </section>
            <section className="flex w-full gap-5 my-5 max-md:flex-col">
              <div className="w-full">
                <label htmlFor="firstname">Email</label> <br />
                <input type="text" className="w-full h-10  border" />
              </div>
              <div className="w-full">
                <label htmlFor="firstname">Phone Number</label> <br />
                <input type="email" className="w-full h-10  border" />
              </div>
            </section>
            <label htmlFor="firstname">Message</label>
            <textarea className="w-full h-32  border" />

            <p className="my-5">
              {" "}
              <input type="checkbox" name="" id="" className="mr-3" /> By
              providing Julie Hansen Partnership your contact information, you
              acknowledge and agree to our Privacy Policy and consent to
              receiving marketing communications, including through automated
              calls, texts, and emails, some of which may use artificial or
              prerecorded voices. This consent isn’t necessary for purchasing
              any products or services and you may opt out at any time. To opt
              out from texts, you can reply, ‘stop’ at any time. To opt out from
              emails, you can click on the unsubscribe link in the emails.
              Message and data rates may apply.
            </p>

            <button
              type="submit"
              className="h-12 w-[200px] rounded-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500 hover:scale-105 bg-black text-white"
            >
              {" "}
              Send Message{" "}
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default ContactUs;
