import { useState } from 'react'
import './App.css'

function App() {
  
  const [query, setQuery] = useState("")
  const [images, setImages] = useState([])
  const [id, setId] = useState(0)

  const handleClick = async () => {
    setId(id + 1)
    const response = await fetch(`https://picsum.photos/id/${id}/200/300`)
    setImages([...images, {title: `imagen ${id}`, url: response.url}])
  }

  const filteredPhotos = images.filter(img => img.title.includes(query)) 

  return (
    <>
      <button onClick={handleClick}>Agregar</button>
      <input type="text" onChange={(e) => setQuery(e.target.value)}/>
      <ul>
        {filteredPhotos.map(item => {
          return (
            <li>
              <h2>{item.title}</h2>
              <img src={item.url} alt="imagen!" />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
