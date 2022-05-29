import "./assets/style/App.css";
import About from "./components/About";
import AllinOne from "./components/AllinOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

function App() {
  return (
    <>
      <main className="main">
        <Navbar />
        <Hero />
        <About />
        <Support />
        <AllinOne />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}

export default App;
