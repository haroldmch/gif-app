
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Loading, please wait...</h2>)
      }
      <div>
        {
          images.map( (img) => (
            <GifItem 
              key={img.id}
              className="card-grid"
              { ...img }/>
          ))
        }
      </div>
    </>
  )
}
