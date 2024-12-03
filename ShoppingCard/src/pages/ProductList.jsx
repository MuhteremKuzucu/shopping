import React, { useEffect, useState } from "react";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import ProductCard from "../components/ProductCard";
const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const [produkte, setProdukte] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUrunler = async () => {
    const { data } = await axios.get(BASE_URL);

    // console.log(data);

    setProdukte(data);

    setLoading(false);
  };

  useEffect(() => {
    getUrunler();
  }, []);

  return (
    <div className="container mt-3">
      <div className="bg-light d-sm-block d-md-flex">
        {loading === true ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {produkte.map((urun) => (
                <ProductCard urun={urun} getUrunler={getUrunler} />
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal produkte={produkte} />
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
