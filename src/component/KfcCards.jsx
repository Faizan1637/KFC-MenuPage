import React from 'react'

function KfcCards({product,handleClick,handleQuantity}) {
    let {title,id,image,descr,price}=product;
    return(
        <div className="col-md-6 col-lg-4 col-sm-12 mt-2 col-xl-4 align-self-sm-center">
    <div className="card " style={{width:"18rem"}}>
    <img className="card-img-top" src={image} alt="Card image cap"/>        
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{descr}</p>
    <h5>Rs:{price}</h5>
    <button className="btn btn-danger " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
     onClick={()=>{handleClick(id)
                   handleQuantity(1)
                   }
    }>Give Order-Detail
    </button>
    </div>
    </div>
    </div>
     )
}

export default KfcCards