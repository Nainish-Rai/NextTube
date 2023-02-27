import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Categories.css"
const Categories = ({title,handleClick,id}) => {
  const navigate = useNavigate()
  return (
    <Link to={`/search/${title}`}>
    <div  className='hvr-underline-from-center min-w-fit
    font-semibold text-xs duration-200 cursor-pointer hover:text-white pb-2'>{title}</div>
    </Link>
  )
}

export default Categories
// onClick={()=>navigate(`categories/${id}`)}