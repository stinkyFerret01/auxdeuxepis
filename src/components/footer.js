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
      <button
        onClick={() => {
          toggler(dpStory, setDpStory);
        }}
      >
        <h5 className="mm-title">A propos de nous</h5>
      </button>
      <button
        onClick={() => {
          toggler(dpContact, setDpContact);
        }}
      >
        <h5 className="mm-title">Contactez nous</h5>
      </button>
      <h5 className="ft-title">Mentions légales</h5>
    </footer>
  );
};

export default Footer;
