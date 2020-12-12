import React from 'react'

export const ProductList = ({ product }) => {
  const list = product.map(item => (
    <li className="product-item" key={item._id}>
      <h3 className="product-item__heading">{item.title}</h3>
      <span className="product-item__title">Description:</span>
      <p className="product-item__description">{item.description}</p>
      <div>
        <span className="product-item__title">Price: </span>
        <span className="product-item__price">
          {item.price}
          {'$'}
        </span>
      </div>
      <div>
        <span className="product-item__title">Brand: </span>
        <span className="product-item__brand">{item.brand}</span>
      </div>
      <div>
        <span className="product-item__title">Category: </span>
        <span className="product-item__category">{item.category}</span>
      </div>
    </li>
  ))
  return <ul className="product_list">{list}</ul>
}
