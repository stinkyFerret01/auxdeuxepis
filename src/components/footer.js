import { Link } from "react-router-dom";

//-- COMP --//
const Footer = ({ dpStory, setDpStory, dpContact, setDpContact }) => {
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
    <footer>
      <Link to="/about">
        <h5 className="ft-title">A propos de nous</h5>
      </Link>
      <button
        onClick={() => {
          toggler(dpContact, setDpContact);
        }}
      >
        <h5 className="mm-title">Contactez nous</h5>
      </button>
      <Link to="/legal">
        <h5 className="ft-title">Mentions légales</h5>
      </Link>
    </footer>
  );
};

export default Footer;
