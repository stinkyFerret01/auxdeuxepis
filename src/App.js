import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//- import des compposants
import Header from "./components/header";
import MainMenu from "./components/main-menu";
import Contact from "./components/contact";
import Map from "./components/map";
import Footer from "./components/footer";

//- import des pages
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Legal from "./pages/legal";

function App() {
  const [dpMainMenu, setDpMainMenu] = useState(false);
  const [dpStory, setDpStory] = useState(false);
  const [dpContact, setDpContact] = useState(false);
  const [dpMap, setDpMap] = useState(false);

  return (
    <div id="app">
      <Router>
        <Header
          dpMainMenu={dpMainMenu}
          setDpMainMenu={setDpMainMenu}
          dpMap={dpMap}
          setDpMap={setDpMap}
          dpContact={dpContact}
          setDpContact={setDpContact}
        ></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        {dpMainMenu && (
          <MainMenu
            setDpMainMenu={setDpMainMenu}
            dpStory={dpStory}
            setDpStory={setDpStory}
            dpContact={dpContact}
            setDpContact={setDpContact}
          ></MainMenu>
        )}
        {dpContact && <Contact setDpContact={setDpContact}></Contact>}
        {dpMap && <Map setDpMap={setDpMap}></Map>}
        <Footer
          dpStory={dpStory}
          setDpStory={setDpStory}
          dpContact={dpContact}
          setDpContact={setDpContact}
        ></Footer>
      </Router>
    </div>
  );
}

export default App;
