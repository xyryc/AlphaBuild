import Banner from "./components/Banner";
import Footer from "./components/Footer";
import LogoMarquee from "./components/LogoMarquee";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="font-inter">
      <Navbar />

      <main className="pt-[60px] pb-8">
        <Banner />

        <Pricing />

        <LogoMarquee />
      </main>

      <Footer />
    </div>
  );
}

export default App;
