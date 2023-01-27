import { useParams } from "react-router-dom";

//-- COMP --//
const Products = () => {
  const { category } = useParams();

  //-- RETURN --//
  return (
    <div className="page-container">
      <h2>{category}</h2>
    </div>
  );
};

export default Products;
