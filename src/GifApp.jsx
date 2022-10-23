import { useState } from "react"
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

  const [categories, setCategories] = useState(['D&D', 'Fall', 'Neon City']);


  const onAddCategory = () => {
    setCategories(['Cyberpunk', ...categories])
    // setCategories(cat => [...cat, 'Cyberpunk']);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory setCategories={ setCategories }/>

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