import React from 'react'
import useFetch from '../../Hooks/useFetch'
import RecipeCard from '../../components/RecipeCard'

const Home = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes')
    // console.log(recipes)
    return (
        <div className=' mx-auto my-16 w-4/5'>
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {recipes && <RecipeCard recipes={recipes} />}
        </div>
    )
}

export default Home