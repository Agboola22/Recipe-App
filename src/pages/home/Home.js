import React from 'react'
import useFetch from '../../Hooks/useFetch'
import RecipeCard from '../../components/RecipeCard'
import './Home.css'

const Home = () => {
    const { data: recipes, isPending, error } = useFetch('/data/db.json')
    // console.log(recipes)
    return (
        <div className=' mx-auto my-16 w-4/5'>
            {isPending &&
                <div class="loading-spinner">
                    <div class="spinner"></div>
                </div>}
            {error && <div>{error}</div>}
            {recipes && <RecipeCard recipes={recipes} />}
        </div>
    )
}

export default Home