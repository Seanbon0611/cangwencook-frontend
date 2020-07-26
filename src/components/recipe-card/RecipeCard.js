import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import './recipe-card.styles.scss'

const RecipeCard = ({ recipe }) => {
  const { attributes } = recipe
  return (
    <div className='recipe-card-container'>
      <h2 className="recipe-title">{attributes.title}</h2>
      <Link to={`/recipes/${recipe.id}`}>
      <img className='recipe-thumbnail'src={attributes.image}/>
      </Link>
      <Typography variant='body1'>{attributes.description}</Typography>
    </div>
  )
}

export default RecipeCard
