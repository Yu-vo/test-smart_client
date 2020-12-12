import React from 'react'

import search_img from '@assets/search.svg'

export const SearchField = ({ search }) => {
  return (
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
  )
}
