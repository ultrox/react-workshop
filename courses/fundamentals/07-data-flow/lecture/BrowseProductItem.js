import React from 'react'
import Quantity from './Quantity'
import { useShoppingCart } from './ShoppingCartState'
import ProductImage from 'YesterTech/ProductImage'

function BrowseProductItem({
  productId,
  name,
  price,
  imagePath,
  quantity
}) {
  const { addToCart, updateQuantity } = useShoppingCart()

  return (
    <div className="browse-product-item">
      <ProductImage src={imagePath} size={7} alt={name} />
      <div>{name}</div>
      <div className="spacing-small">
        <button
          onClick={() => {
            addToCart(productId, name, price)
          }}
          className="button"
        >
          Add To Cart
        </button>
        <div className="align-right">
          {quantity > 0 && (
            <Quantity
              quantity={quantity}
              onChange={quantity => {
                updateQuantity(productId, quantity)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BrowseProductItem
