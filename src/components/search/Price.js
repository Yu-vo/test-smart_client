import React from 'react'

export const Price = ({ minPrice, maxPrice }) => {
  return (
    <div className="search-price">
      <span className="search-price__heading">Price</span>
      <div>
        <input
          className="search-price__field"
          type="number"
          min={0}
          placeholder="min"
          {...minPrice}
        />
        <input
          className="search-price__field"
          type="number"
          placeholder="max"
          {...maxPrice}
        />
      </div>
    </div>
  )
}
