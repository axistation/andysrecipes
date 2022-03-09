import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsPeople } from "react-icons/bs"
import { BsBarChart } from "react-icons/bs"
import slugify from "slugify"
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const {
          id,
          title,
          image,
          prepTime,
          servings,
          cookTime,
          difficulty,
        } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              <BsBarChart /> {difficulty}
              <span className="divider">|</span>
              <BsClockHistory /> {cookTime}min
              <span className="divider">|</span>
              <BsPeople /> {servings}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
