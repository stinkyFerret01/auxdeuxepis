import { Link } from "react-router-dom";

//-- COMP --//
const Header = ({
  dpMainMenu,
  setDpMainMenu,
  dpMap,
  setDpMap,
  dpContact,
  setDpContact,
}) => {
  //-- FONCTIONS --//
  const toggler = (arg, setArg) => {
    if (arg) {
      setArg(false);
    } else {
      setArg(true);
    }
  };

  //-- RETURN --//
  return (
    <header
      onClick={() => {
        if (dpContact) {
          setDpContact(false);
        }
        if (dpMap) {
          setDpMap(false);
        }
      }}
    >
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
        <h1 className="header-title">Aux Deux Épis</h1>
        <h6 style={{ textAlign: "end" }}>boulanger, patissier, chocolatier</h6>
      </Link>
      <div>
        <button
          style={{ marginRight: "1rem" }}
          onClick={() => {
            toggler(dpContact, setDpContact);
          }}
        >
          <h2>
            <i class="fa-solid fa-phone"></i>
          </h2>
        </button>
        <button
          onClick={() => {
            toggler(dpMap, setDpMap);
          }}
        >
          <h2>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
          </h2>
        </button>
      </div>
    </header>
  );
};

export default Header;
