import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Products {
  limit: number;
  products: [];
  skip: number;
  total: number;
}

interface Product {
  price: ReactNode;
  thumbnail: string | undefined;
  id: number;
  title: string;
}
function Home() {
  const [products, setProducts] = useState<Products | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        return data.json();
      })
      .then((products) => {
        setProducts(products);
      });
  }, []);
  console.log(products);

  const handleDelete = (id: number) => {
    if (products) {
      const result: any = products.products.filter((prod: Product) => {
        return prod.id != id;
      });

      setProducts({ ...products, products: result });
    }
  };

  return (
    <div className="align-element ">
      <ul className="flex flex-wrap	gap-10">
        {products &&
          products.products.map((product: Product) => {
            return (
              <Link
                key={product.id}
                to={`/about/${product.id}`}
                className="card-link"
              >
                <li className="card w-96 bg-base-100 shadow-xl mb-4">
                  <figure>
                    <img src={product.thumbnail} alt={product.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.id}</p>
                    <h3 className="font-bold text-3xl	">$ {product.price} </h3>
                    <div className="card-actions justify-end">
                      <button onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default Home;
