import About from "./components/About";
import BussinessProcess from "./components/BussinessProcess";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer/index.tsx";
import Hero from "./components/Hero";
import Market from "./components/Market";
import Newsletter from "./components/Newsletter.tsx";
import Plan from "./components/Plan";
import SellingProcess from "./components/SellingProcess";
import Showcase from "./components/Showcase";

function App() {
  return (
    <>
      <main className="h-fit border-2  ">
        <Hero />
        <Plan />
        <Showcase />
        <BussinessProcess />
        <SellingProcess />
        <About />
        <Market />
        <ContactUs />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

export default App;
