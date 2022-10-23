import { useState } from "react"



export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
    console.log(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1 ) return;

    console.log(inputValue)
    setCategories(categories => [inputValue, ...categories]);
    setInputValue('')
  }

  return(
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Search Gif"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}