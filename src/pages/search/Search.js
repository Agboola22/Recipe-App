import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import RecipeCard from '../../components/RecipeCard';

const Search = () => {
    const location = useLocation();
    const queryString = location.search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('query')?.toLowerCase() || ''
    console.log(location)


    // const url = `http://localhost:3000/recipes?query=` + query;
    const url = `http://localhost:3000/recipes`;

    const { data, isPending, error } = useFetch(url);

    const filteredRecipes = data ? data.filter(recipe =>
        recipe.title.toLowerCase().includes(query)
        //  ||
        // recipe.ingredients.join(' ').toLowerCase().includes(query) ||
        // recipe.method.toLowerCase().includes(query)
    ) : [];

    return (
        <div className='mx-auto my-16 w-4/5 text-center'>
            <h2 className='md:text-2xl text-lg font-semibold my-8'>Recipes including: "{query}" </h2>
            {isPending &&
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            }
            {error && <div>{error}</div>}
            {data && <RecipeCard recipes={filteredRecipes} />}
            {data && filteredRecipes.length === 0 && (
                <div>No recipes match your search '{query}'. Please try again with a different recipe</div>
            )}
        </div>
    );
};

export default Search;
