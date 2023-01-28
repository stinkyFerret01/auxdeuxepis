import { useState } from "react";
import { useNavigate } from "react-router-dom";

//-- COMP --//
const MainMenu = ({ setDpMainMenu }) => {
  const [dpProducts, setDpProducts] = useState(true);
  const navigate = useNavigate();

  //-- FONCTIONS
  const toggler = (arg, setArg) => {
    if (arg) {
      setArg(false);
    } else {
      setArg(true);
    }
  };

  //-- RETURN --//
  return (
    <div
      id="main-menu-container"
      onMouseLeave={() => {
        setDpMainMenu(false);
      }}
    >
      <button
        onClick={() => {
          toggler(dpProducts, setDpProducts);
        }}
      >
        <h2 className="mm-title">Nos Produits</h2>
      </button>
      {dpProducts && (
        <section className="mm-subtitles">
          <button
            onClick={() => {
              navigate("/products/pain");
              setDpMainMenu(false);
            }}
          >
            <h3 className="mm-subtitle">Pains</h3>
          </button>
          <button
            onClick={() => {
              navigate("/products/viennoiseries");
              setDpMainMenu(false);
            }}
          >
            <h3 className="mm-subtitle">Viennoiseries</h3>
          </button>
          <button
            onClick={() => {
              navigate("/products/patisseries");
              setDpMainMenu(false);
            }}
          >
            <h3 className="mm-subtitle">Patisseries</h3>
          </button>
          <button
            onClick={() => {
              navigate("/products/Gateaux");
              setDpMainMenu(false);
            }}
          >
            <h3 className="mm-subtitle">Gateaux</h3>
          </button>
        </section>
      )}
    </div>
  );
};

export default MainMenu;
