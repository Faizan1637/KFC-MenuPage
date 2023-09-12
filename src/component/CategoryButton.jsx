import React from 'react'

function CategoryButton({category,onCatSelection,selectedCatId}) {
  
  return (
    <>
    {category.map((cat)=>{
      return(<React.Fragment key={cat.id}>
      <button
        type="button"
        className={
          `m-1 btn 
            ${cat.id === selectedCatId ? 'btn-success' : 'btn-danger'}`
        }
        key={cat.id}
        onClick={() => onCatSelection(cat.id)}
      >
        {cat.title}
        </button>
    </React.Fragment>)
    })}
    </>
  )
}

export default CategoryButton