import React, { useState } from 'react'

export const Categories = ({ categoriesSelect }) => {
  const categoriesList = [
    'Выберите категорию',
    'Продукты питания/напитки',
    'Одежда и обувь',
    'Электротовары и бытовая техника',
    'Мебель и хозтовары',
    'Лекарства',
    'Товары для спорта',
    'Газеты, журналы и книги',
    'Бытовые товары',
    'Канцелярия',
    'Красота и здоровье',
    'Развлечение',
    'Фото и видео',
    'Музыка',
    'Другое',
  ]
  return (
    <div className="search-categories">
      <span className="search-categories__heading">Category</span>
      <select className="search-categories__field" {...categoriesSelect}>
        {categoriesList.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
