import React from 'react'
import { Link } from 'react-router-dom'

function BreadCumb() {

  const name = JSON.parse(localStorage.getItem('application'))||"Tiffin Mate"

  return (
    <>
    <Link to="/">{name}</Link>
    </>
  )
}

export default BreadCumb