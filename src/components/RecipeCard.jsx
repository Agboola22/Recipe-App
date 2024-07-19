import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipes }) => {
    if (!Array.isArray(recipes)) {
        return <div>Error: recipes is not an array</div>;
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10'>
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className='bg-white text-[#333] p-5 rounded-md shadow-md relative hover:rotate-3  transition-all duration-300 ease-in'>
                    <h3 className=' text-[#555] mb-2 text-2xl font-semibold '>{recipe.title}</h3>
                    <p className=' text-[#999] text-base'>{recipe.cookingTime} to make</p>
                    <div className=' text-[#555] text-xs leading-5 my-4'>{recipe.method.substring(0, 100)}.....</div>
                    <Link
                        to={`/recipes/${recipe.id}`}
                        className=' text-[#555] block bg-[#e2e2e2] text-base w-[120px] text-center p-2 rounded font-medium mt-5 mx-auto mb-0 hover:bg-purple-300 hover:text-white transition-all duration-300 ease-in'
                    >Cook This</Link>
                </div>
            ))}
        </div>
    )
}

export default RecipeCard