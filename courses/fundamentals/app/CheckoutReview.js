import React, { Fragment } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Columns, Column } from 'react-flex-columns'
import { FaAngleLeft } from 'react-icons/fa'
import { Heading } from 'workshop'
import { useShoppingCartState } from './ShoppingCartState'

function CheckoutReview() {
  const { cart, getCartTotal } = useShoppingCartState()
  return (
    <div className="spacing">
      <Heading>
        <MdShoppingCart /> Review Your Order
      </Heading>

      <div className="spacing-small">
        {cart.map(item => (
          <Fragment key={item.productId}>
            <Columns gutters middle>
              <Column flex>
                <span className="no-wrap">
                  {item.name} ({item.quantity})
                </span>
              </Column>
              <Column>${(item.price * item.quantity).toFixed(2)}</Column>
            </Columns>
            <hr />
          </Fragment>
        ))}
      </div>
      <Columns split>
        <Column>
          <strong>Total</strong>
        </Column>
        <Column>
          <strong>${getCartTotal().toFixed(2)}</strong>
        </Column>
      </Columns>

      <hr />

      <Columns split>
        <Column>
          <Link className="button" to="/checkout/billing">
            <FaAngleLeft />
            <span>Billing</span>
          </Link>
        </Column>
        <Column>
          <button className="button cta-button">Place Order</button>
        </Column>
      </Columns>
    </div>
  )
}

export default CheckoutReview
