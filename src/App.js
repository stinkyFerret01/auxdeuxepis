import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//- import des compposants
import Header from "./components/header";
import MainMenu from "./components/main-menu";
import Story from "./components/story";
import Contact from "./components/contact";
import Map from "./components/map";
import Footer from "./components/footer";

//- import des pages
import Home from "./pages/home";
import Products from "./pages/products";

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
        ></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
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
        {dpStory && <Story setDpStory={setDpStory}></Story>}
        {dpContact && <Contact setDpContact={setDpContact}></Contact>}
        {dpMap && <Map></Map>}
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
