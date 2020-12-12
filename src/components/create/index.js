import React, { useState } from 'react'
import { withCreate } from './withCreate'

const Create = ({
  handleSubmit,
  disable,
  message,
  input,
  inputParameters,
  categoriesList,
  categoriesSelect,
}) => {
  const fieldsMain = input.map(item => (
    <div key={item.id} className="create_product__main">
      <h4 className="create_product__title">{item.title}</h4>
      <input
        className="create_product__field"
        type={item.type}
        placeholder={item.title}
        {...item.handle}
        disabled={disable}
      />
    </div>
  ))
  const fieldsParameters = inputParameters.map(item => (
    <div key={item.id} className="create_product__parameters">
      <p className="create_product__title">{item.title}</p>
      <input
        min="0"
        className="create_product__field"
        type={item.type}
        placeholder={item.title}
        {...item.handle}
        disabled={disable}
      />
    </div>
  ))
  const listOptionCategories = categoriesList.map(item => (
    <option key={item} value={item} disabled={disable}>
      {item}
    </option>
  ))
  return (
    <section className="create_product">
      <form className="create_product-wrapper" onSubmit={handleSubmit}>
        <h5 className="create_product-h5">Main</h5>
        {fieldsMain}
        <h5 className="create_product-h5">Parameters</h5>
        {fieldsParameters}
        <p className="create_product__title">Category</p>
        <select className="create_product__field" {...categoriesSelect}>
          {listOptionCategories}
        </select>
        <button className="create_product__btn-submit" type="submit">
          Create Product
        </button>
        <p className="create_product__message">{message}</p>
      </form>
    </section>
  )
}
export const CreateProduct = withCreate(Create)
