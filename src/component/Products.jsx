import { useState, React } from 'react'
import KfcCards from './KfcCards' 
import ProductDetailOffCanvas from './ProductDetailOffCanvas'

function Products({ products, addOns, handleCart, productItems}) {
  
  const productArray=productItems.length?(productItems):(products);
  let [quantity, setQuantity] = useState(1);
  let [productDetail,setProductDetail]=useState([]);
   
    const handleQuantity=(qty)=>{
      setQuantity(qty);
    }

    const handleClick = ((id) => setProductDetail(products.filter((item)=>{
        if(item.id=== id)
         return item
    }))
    )

  return (
    <>
      <ProductDetailOffCanvas productDetail={productDetail} addOns={addOns} handleCart={handleCart} handleQuantity={handleQuantity} quantity={quantity}/>
      <div className='container bg-success'>
        <div className='row  bg-danger align-items-sm-center justify-content-sm-center'>{productArray.map((product) => <KfcCards product={product} handleQuantity={handleQuantity} handleClick={handleClick} key={product.id} />)}</div>
      </div>
    </>
  )
  
}

export default Products