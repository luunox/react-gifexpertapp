import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('Hola mundo')

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (e.charCode === 13 & inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats])
      setInputValue('')
    }
  }
    // console.log(e.target.value)
  return (
    <>
      <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleSubmit}
      />
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}