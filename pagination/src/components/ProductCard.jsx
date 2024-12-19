import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="card">
          <img src={product?.images[0]} alt="productImage" />
          <h2>{product?.brand}</h2>
          <p>{product?.description}</p>
        </div>
  )
}

export default ProductCard