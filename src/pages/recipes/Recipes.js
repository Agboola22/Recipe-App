import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

const Recipes = () => {
    const { id } = useParams()
    const url = '/data/db.json'
    const { data, isPending, error } = useFetch(url)

    const recipe = data && data.recipes ? data.recipes.find(r => r.id === id) : null

    return (
        <div className='mx-auto my-16 w-4/5 md:w-3/5 bg-white box-border  text-center p-10 rounded-sm shadow'>
            {isPending && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            )}
            {error && <div>{error}</div>}
            {recipe && (
                <>
                    <h1 className=' text-center text-[#333] mb-10 mx-auto text-3xl font-semibold'>{recipe.title}</h1>
                    <p className='text-[#999] text-lg font-medium'>Takes: {recipe.cookingTime} to cook.</p>
                    <ul className='p-0 flex justify-center mt-0'>
                        {recipe.ingredients.map((ing, i) => <li key={ing} className='text-[#777] mr-3'>{ing}{i < recipe.ingredients.length - 1 ? ',' : '.'}</li>)}
                    </ul>

                    <p className=' text-left text-lg mt-2'><span className=' font-medium'>Method:</span> {recipe.method}</p>
                </>
            )}
        </div>
    );
}

export default Recipes;
