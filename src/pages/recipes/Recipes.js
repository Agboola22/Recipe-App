import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/Config';
// import { useFetch } from '../../Hooks/useFetch';

const Recipes = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    const [head, setHead] = useState('')

    const handleEdit = () => {
        if (head) {
            projectFirestore.collection('recipes').doc(id).update({
                title: head
            })
        } else {
            prompt('enter a valid input')
        }
    }

    useEffect(() => {
        setIsPending(true)
        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('could not find recipe')
            }
        })
        return () => unsub()
    }, [id])
    return (
        <div className='mx-auto my-16 w-4/5 md:w-3/5 bg-white dark:bg-gray-400 box-border  text-center p-10 rounded-sm shadow text-lg'>
            {isPending && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            )}
            {error && <div>{error}</div>}
            {recipe && (
                <>
                    <h1 className=' text-center text-[#333] mb-10 mx-auto text-3xl font-semibold'>{recipe.title}</h1>
                    <p className='text-[#999] font-medium'>Takes: {recipe.cookingTime} to cook.</p>
                    <p className='text-[#777] mr-3'><span className='text-[#333] font-medium'>Ingredients:</span> {recipe.ingredients.join(', ')}</p>
                    <p className=' text-left mt-2'><span className=' text-[#333] font-medium'>Method:</span> {recipe.method}</p>
                    <input value={head} onChange={(e) => setHead(e.target.value)} />
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
}

export default Recipes;
