import React, { useCallback, useState } from 'react'

export const useFormField = (initialState = '') => {
  const [value, setValue] = useState(initialState)
  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [])
  return [{ value, onChange }, setValue]
}
