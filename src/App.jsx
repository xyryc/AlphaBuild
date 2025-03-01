import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="font-inter">
      <Navbar />

      <main className="pt-[60px] pb-[56px]">
        <Banner />

        <Pricing/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
