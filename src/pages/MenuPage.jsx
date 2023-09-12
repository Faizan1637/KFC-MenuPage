import React, {useState} from 'react'
import CategoryButton from '../component/CategoryButton'
import Products from '../component/Products'
import Footer from '../component/Footer'

function MenuPage({products, category,addOns,handleCart}) {
  
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [productItems, setProducts] = useState([]);
  let upperLimit=0;
  let lowerLimit=0;

  const onCatSelection = (catId) => {
    setSelectedCatid(catId);
    setProducts(products.filter((p) => p.categoryId === catId));
  };
  
  const page = (item) => {
    if(upperLimit!==item){
    upperLimit=item;
    lowerLimit=upperLimit-9
    setProducts(products.filter((product) =>{
      if(product.id >= lowerLimit && product.id <= upperLimit){
               return product;
      }
    })
    )
  }
  }


  return (
    <>
    <CategoryButton 
    category={category}
    onCatSelection={onCatSelection} 
    selectedCatId={selectedCatId}/>

    <Products
     products={products}
     productItems={productItems}
     category={category}
     addOns={addOns}
     handleCart={handleCart}
     />
    
      <Footer page={page} />
    </>
  )
}

export default MenuPage