export const getGifs = async (category) => {

  const key = 'esKDiQjhETQlVxB9pfuV9Kz2oIwURc3o',
        url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=5`,
        resp = await fetch(url),
        { data } = await resp.json(),
        gifs = data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
        }))
  
  return gifs
}
