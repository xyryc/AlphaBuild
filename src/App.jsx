import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-inter">
      <Navbar />

      <main className="pt-[60px]">
        <Banner />
      </main>
    </div>
  );
}

export default App;
