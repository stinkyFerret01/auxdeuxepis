//-- COMP --//
const MediumArticle = ({ prod, index }) => {
  const position = index % 2;

  //-- RETURN --//
  return (
    <article className={position === 0 ? "article-prom-rev" : "article-prom"}>
      <div className="prom-right">
        <div>
          <img
            className="s-logo"
            src="./aux-deux-epis-logo.jpeg"
            alt="boutique aux deux épis"
          />
        </div>
        <h2 className="ar-title">{prod.name}</h2>
        <h3>{prod.description}</h3>
      </div>
      <div className="prom-left">
        <img
          className="prom-left-img"
          src={prod.thumb}
          alt="boutique aux deux épis"
        />
      </div>
    </article>
  );
};

export default MediumArticle;
