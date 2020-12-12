import React, { useState } from 'react'
import { CreateProduct } from '../../APIservise'
import { useFormField } from '@containers/useFormField'

export const withCreate = WrappedComponent => props => {
  const [titleInput, setTitle] = useFormField()
  const [descriptionInput, setDescription] = useFormField()
  const [priceInput, setPrice] = useFormField()
  const [brandInput, setBrand] = useFormField()
  const [categoriesSelect, setCategories] = useFormField('Выберите категорию')

  const [disable, setDisable] = useState(false)
  const [message, setMessage] = useState('')
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
  const input = [
    {
      id: 1 + 'create',
      title: 'Title',
      type: 'text',
      handle: titleInput,
    },
    {
      id: 2 + 'create',
      title: 'Description',
      type: 'text',
      handle: descriptionInput,
    },
  ]
  const inputParameters = [
    {
      id: 1 + 'createparam',
      title: 'Price',
      type: 'number',
      handle: priceInput,
    },
    {
      id: 2 + 'createparam',
      title: 'Brand',
      type: 'text',
      handle: brandInput,
    },
  ]

  const handleSubmit = e => {
    e.preventDefault()
    setDisable(true)
    const data = {
      title: titleInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
      brand: brandInput.value,
      category: categoriesSelect.value,
    }
    if (
      titleInput.value.length &&
      descriptionInput.value.length &&
      priceInput.value != 0 &&
      brandInput.value.length &&
      categoriesSelect.value != 'Выберите категорию'
    ) {
      CreateProduct(data).then(res => {
        if (res.ok) {
          setDisable(false)
          setMessage('Create')
        }
      })
      setPrice('')
      setTitle('')
      setDescription('')
      setBrand('')
      setCategories('Выберите категорию')

      setTimeout(() => setMessage(''), 5000)
    } else {
      setDisable(false)
      setMessage('All fields must be filled')
    }
  }
  return (
    <WrappedComponent
      handleSubmit={handleSubmit}
      disable={disable}
      message={message}
      input={input}
      inputParameters={inputParameters}
      categoriesList={categoriesList}
      categoriesSelect={categoriesSelect}
    />
  )
}
