import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <Link to={'/todo'}> Todo  </Link>&nbsp; &nbsp;
        <Link to={'/home'}> Home</Link>

    </div>
  )
}

export default Menu
