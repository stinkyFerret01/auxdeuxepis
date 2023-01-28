import { useEffect, useState } from "react";

//-- import des composants
import MediumArticle from "../components/medium-article";

const Home = () => {
  const [presProducts, setPresProducts] = useState([]);

  useEffect(() => {
    const test = [
      {
        thumb:
          "https://assets.afcdn.com/recipe/20131024/24713_w1024h576c1cx2747cy1872.jpg",
        name: "croissant au beurre",
        description: "un bon petit croissant",
      },
      {
        thumb:
          "https://assets.afcdn.com/recipe/20131024/24713_w1024h576c1cx2747cy1872.jpg",
        name: "croissant au beurre",
        description: "un bon petit croissant",
      },
      {
        thumb:
          "https://assets.afcdn.com/recipe/20131024/24713_w1024h576c1cx2747cy1872.jpg",
        name: "croissant au beurre",
        description: "un bon petit croissant",
      },
    ];
    setPresProducts(test);
  }, []);

  return (
    <div id="home-page" className="page-container">
      <div id="pres-container">
        <img
          id="pres-img"
          src="./aux-deux-epis-boutique.jpg"
          alt="boutique aux deux épis"
        />
        <div id="pres-message">
          <h2 id="pm-1">Ici un petit texte d'acceuil sympas</h2>
          <h3 id="pm-2">(et sans fautes d'orthographe)</h3>
        </div>
      </div>
      <section id="home-promo">
        {presProducts.map((prod, index) => {
          return <MediumArticle prod={prod} index={index} />;
        })}
      </section>
    </div>
  );
};

export default Home;
