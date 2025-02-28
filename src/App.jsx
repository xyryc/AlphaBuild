import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-inter">
      <Navbar />

      <main className="pt-[60px]">
        <Banner />
      </main>

      <Footer />
    </div>
  );
}

export default App;
