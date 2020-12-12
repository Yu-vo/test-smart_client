import React, { useState, useEffect } from 'react'
import { useFormField } from '@containers/useFormField'
import { GetProduct } from '../../APIservise'
import { ProductList } from './ProductList'
import { Categories } from './Categories'
import { Price } from './Price'
import { SearchField } from './SearchField'

import search_img from '@assets/search.svg'

export const Search = () => {
  const [product, setProduct] = useState([])
  const [search] = useFormField()
  const [minPrice] = useFormField()
  const [maxPrice] = useFormField()
  const [categoriesSelect] = useFormField('Выберите категорию')

  useEffect(() => {
    GetProduct().then(res => setProduct(res))
  }, [])
  const handleSubmit = e => {
    e.preventDefault()
    GetProduct(search.value, {
      price: { min: minPrice.value, max: maxPrice.value },
      category:
        categoriesSelect.value == 'Выберите категорию'
          ? ''
          : categoriesSelect.value,
    }).then(res => setProduct(res))
  }
  return (
    <section>
      <form className="search" onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <div className="search-field">
            <input
              className="search-field__input"
              type="text"
              placeholder="Search"
              {...search}
            />
            <button className="search-field__button" type="submit">
              <img src={search_img} alt="" />
            </button>
          </div>
          <div className="search-wrapper_extra">
            <Price minPrice={minPrice} maxPrice={maxPrice} />
            <Categories categoriesSelect={categoriesSelect} />
          </div>
        </div>
      </form>
      <ProductList product={product} />
    </section>
  )
}
