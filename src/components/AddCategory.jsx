import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
    console.log(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim()
    if(value.length <= 1 ) return;

    onNewCategory(value)
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