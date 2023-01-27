const Contact = ({ setDpContact }) => {
  return (
    <div className="spread-over-all">
      <div id="contact-container">
        <section>
          <button
            onClick={() => {
              setDpContact(false);
            }}
          >
            XXX
          </button>
          <h2>vous pouvez nous contacter</h2>
          <article className="contact-solution">
            <h4>par mail:</h4>
            <h3 className="contact-info">blabla@gmail.com</h3>
          </article>
          <article className="contact-solution">
            <h4>par téléphone:</h4>
            <h3 className="contact-info">01 34 67 12 89</h3>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Contact;
