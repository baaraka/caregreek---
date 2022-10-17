import "./App.css";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
