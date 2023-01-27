import { Link } from "react-router-dom";

const Header = ({ dpMainMenu, setDpMainMenu, dpMap, setDpMap }) => {
  const toggler = (arg, setArg) => {
    if (arg) {
      setArg(false);
    } else {
      setArg(true);
    }
  };

  return (
    <header>
      <button
        onClick={() => {
          toggler(dpMainMenu, setDpMainMenu);
        }}
      >
        <h2>
          <i class="fa-solid fa-bars"></i>
        </h2>
      </button>
      <Link to="/">
        <h1>Aux Deux Épis</h1>
        <h6 style={{ textAlign: "end" }}>boulanger, patissier, chocolatier</h6>
      </Link>
      <button
        onClick={() => {
          toggler(dpMap, setDpMap);
        }}
      >
        <h2>
          <i class="fa-sharp fa-solid fa-location-dot"></i>
        </h2>
      </button>
    </header>
  );
};

export default Header;
