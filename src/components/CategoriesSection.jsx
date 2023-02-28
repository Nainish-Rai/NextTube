import React from 'react'
import Categories from './Categories'
import "./Categories.css"
import { Link } from 'react-router-dom'
const CategoriesSection = () => {
  return (
    <div className="flex items-center  overflow-x-scroll space-x-14 scrollbar-hide">
    <Link to="/"><Categories title="All" id='' handleClick="" /></Link>
    <Categories title="Trending" id="Trending" handleClick="" />
    <Categories title="Music" id="music"  handleClick="" />
    <Categories title="News" id="news" handleClick="" />
     <Categories title="Gaming" id="gaming" handleClick="" />
    <Categories title="Sports" id="sports" handleClick="" />
    <Categories title="Films" id="movies" handleClick="" />
    <Categories title="Fashion" id="26" handleClick="" />
    <Categories title="Comedy" id="23" handleClick="" />
    <Categories title="DOTA" id="20" handleClick="" />
  </div>
  )
}

export default CategoriesSection