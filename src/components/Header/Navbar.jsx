import React from 'react'
import { categories } from "../../helper/data"

 function Navbar() {
    console.log(categories)
  return (
    <div className='menu'>

<div className='buttons'>

{categories.map(category=>(
    <button key={category}>{category.toUpperCase()}</button>
))}

</div>
      
    </div>
  )
}

export default Navbar
