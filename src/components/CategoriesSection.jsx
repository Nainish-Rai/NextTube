import React from 'react'
import Categories from './Categories'
import "./Categories.css"
import { Link } from 'react-router-dom'
const CategoriesSection = () => {
  return (
    <div className="xl:flex items-center xl:max-w-[60%] shrink max-w-[40%] hidden  overflow-x-scrol space-x-14 scrollbar-hide md:pl-0 pl-5 md:pr-5">
    <Link to="/"><Categories title="All" id='' handleClick="" /></Link>
    <Categories title="Trending" id="Trending" handleClick="" />
    <Categories title="Music" id="music"  handleClick="" />
    <Categories title="News" id="news" handleClick="" />
     <Categories title="Gaming" id="gaming" handleClick="" />
    <Categories title="Sports" id="sports" handleClick="" />
    <Categories title="Films" id="movies" handleClick="" />
    <Categories title="Fashion" id="26" handleClick="" />
    {/* <Categories title="Comedy" id="23" handleClick="" /> */}
    {/* <Categories title="DOTA" id="20" handleClick="" /> */}
  </div>
  )
}

export default CategoriesSection