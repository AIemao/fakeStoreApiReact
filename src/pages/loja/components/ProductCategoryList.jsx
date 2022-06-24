import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Context } from "../context/ProductContext";
import ProductCard from "./ProductCard";

export default function CategoriaProdutos({ category }) {
  const [products, setProducts] = useState();
  const { getProductsByCategory } = useContext(Context);

  useEffect(() => {
    getProductsByCategory(category).then((response) => setProducts(response));
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <Row>
        {!products && <p>Carregando ...</p>}
        {products &&
          products.map((product) => (
            <Col md={2} className="my-1 d-flex align-items-flex-start">
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </div>
  );
}
