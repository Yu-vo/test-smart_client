export const CreateProduct = async data => {
  const response = await fetch('http://localhost:3000/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch(err => console.log(err))
  return await response
}

export const GetProduct = async (
  string = '',
  parameters = { price: { min: '', max: '' }, category: '' }
) => {
  const response = await fetch('http://localhost:3000/product/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string, parameters }),
  }).catch(err => console.log(err))
  return await response.json()
}
