import { useState } from "react"
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

  const [categories, setCategories] = useState(['D&D', 'Fall', 'Neon City']);


  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={ onAddCategory }/>

      {/* Listo de Gif */}
      <ol>
        {
          categories.map(category => {
            return <li key={ category }>{category}</li>
          })
        }
      </ol>
        {/* Gif Item */}
    </>
  )
}