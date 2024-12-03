import axios from "axios";
import React from "react";

const ProductCard = ({urun,getUrunler}) => {

  const remove=async()=>{
    await axios.delete(`https://63f4e5583f99f5855db9e941.mockapi.io/products/${urun.id}`);

    getUrunler()
  }


  const arttir=async()=>{
    await axios.put(`https://63f4e5583f99f5855db9e941.mockapi.io/products/${urun.id}`,{...urun,amount: urun.amount+1});

    getUrunler()
  }

  const azalt=async()=>{
    await axios.put(`https://63f4e5583f99f5855db9e941.mockapi.io/products/${urun.id}`,{...urun,amount: urun.amount-1});

    getUrunler()
  }


  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={urun.image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            title={""}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
              {urun.name}
            </h5>
            <div className="product-price d-flex flex-wrap align-items-center">
                <span className="damping-price text-warning h2">${(urun.price*urun.dampingRate).toFixed(2)}</span>
                <span className="h5 text-dark text-decoration-line-through">
                  {urun.price}
                </span>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button onClick={azalt} className="btn btn-secondary btn-sm">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {urun.amount}
                </p>
                <button onClick={arttir} className="btn btn-secondary btn-sm">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button onClick={remove} className="btn btn-danger btn-sm w-100 remove-product">
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $<span className="product-line-price">{(urun.price*urun.dampingRate*urun.amount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
