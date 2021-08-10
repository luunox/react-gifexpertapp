import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function GifExpertApp() {

  const [categories, setCategories] = useState(['Elizabeth'])

  // const handleAdd = () => {
  //   setCategories(['Goblin', ...categories])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>

      <div style={{marginLeft: 10+'px'}}>
        {
          categories.map( cat => (
            <GifGrid
                    key={cat} 
                    category={cat} />
          ))
          // return <li key={cat}>{cat}</li>
        }
      </div>
    </>
  )
}

export default GifExpertApp
