import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="align-element flex">
      <div>
        {" "}
        <h1>{product.title}</h1>
        <h2>{product.brand}</h2>
        <p>{product.content}</p>
        <p>Status: {product.availabilityStatus}</p>
        <p>Description: {product.description}</p>
      </div>
      <div>
        <img src={product.images} alt="" />
      </div>
    </div>
  );
}

export default About;
