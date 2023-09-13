import React from "react";
import Swal from "sweetalert2";




const handleClick = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Added to Cart Succcessfully",
    showConfirmButton: false,
    timer: 1500,
  });
};

function ProductDetailOffCanvas({ productDetail, addOns, handleCart,handleQuantity,quantity}) {
  const selectedProduct = productDetail.length ? productDetail[0] : 1;
  
 

  const getTotal = () => {
    return productDetail.length ? quantity * selectedProduct.price : 0;
  };

  const disableBtn = () => {
    return quantity > 1 ? false : true;
  };
  return (
    <>
      <div
        className="offcanvas offcanvas-end "
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Give Detail About Item</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => handleQuantity(1)}
          ></button>
        </div>
        <div className="offcanvas-body">
          {productDetail.length ? (
            <>
              <div className="card" style={{width:"18rem"}}>
                <img
                  className="card-img-top"
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{selectedProduct.title}</h5>
                  <p className="card-text">{selectedProduct.descr}</p>
                  <h2>Rs:{selectedProduct.price} per item</h2>
                </div>
              </div>
            </>
          ) : (
            <h2>Empty</h2>
          )}
          <div className="d-flex justify-content-center flex-column align-items-center mt-3">
            <div>
              <button
                className="btn btn-success"
                onClick={() => handleQuantity(quantity + 1)}
              >
                +
              </button>
              {quantity}
              <button
                className="btn btn-danger"
                disabled={disableBtn()}
                onClick={() => handleQuantity(quantity - 1)}
              >
                -
              </button>
            </div>
            <div>
              <h3>Select Quantity</h3>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-danger"
            data-bs-dismiss="offcanvas"
            onClick={() => {
              handleCart({...selectedProduct,quantity});
              handleClick();
            }}
          >
            Rs {getTotal()} Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetailOffCanvas;
