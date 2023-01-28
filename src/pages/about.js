import { useState, useEffect } from "react";

//-- import des composants
import MediumArticle from "../components/medium-article";

//-- COMP --//
const About = () => {
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    const test = [
      {
        thumb:
          "https://assets.afcdn.com/recipe/20131024/24713_w1024h576c1cx2747cy1872.jpg",
        name: "meilleur croissant au beurre",
        description: "prix du meilleur croissant de l'univers",
      },
      {
        thumb:
          "https://assets.afcdn.com/recipe/20131024/24713_w1024h576c1cx2747cy1872.jpg",
        name: "meilleur croissant au beurre",
        description: "prix du meilleur croissant de l'univers",
      },
      {
        thumb:
          "https://assets.afcdn.com/recipe/20131024/24713_w1024h576c1cx2747cy1872.jpg",
        name: "meilleur croissant au beurre",
        description: "prix du meilleur croissant de l'univers",
      },
    ];
    setPrizes(test);
  }, []);

  //-- RETURN --//
  return (
    <div id="about-page" className="page-container">
      <img
        className="m-logo"
        src="./aux-deux-epis-logo.jpeg"
        alt="boutique aux deux épis"
      />
      <h1>A propos de nous</h1>
      <section id="prizes-promo">
        {prizes.map((prod, index) => {
          return <MediumArticle prod={prod} index={index} />;
        })}
      </section>
    </div>
  );
};

export default About;
