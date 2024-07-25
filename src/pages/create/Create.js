import { useRef, useState } from 'react'
import CustomLabel from '../../components/CustomLabel'

const Create = () => {
    const [title, setTitle] = useState('')
    const [method, setmethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, method, cookingTime, newIngredient, ingredients)
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingInput.current.focus()
    }

    return (
        <div className='md:w-[480px] w-[280px] mx-auto text-center my-16 text-[#555]'>
            <h2 className='text-3xl font-semibold tracking-wider mb-8'>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className=' space-y-4'>
                    <CustomLabel
                        htmlFor='title'
                        labelText='Recipe Title:'
                        inputType='text'
                        inputValue={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />
                    <div className='space-y-2 text-base'>
                        <label htmlFor='newIngredient' className='block text-left font-medium'>Recipe Ingredients: </label>
                        <div className='grid md:grid-cols-5 grid-cols-4 gap-4 items-center'>
                            <input
                                type='text'
                                value={newIngredient}
                                onChange={(e) => setNewIngredient(e.target.value)}
                                className='appearance-none relative block w-full px-3 py-2 rounded-lg border border-[#d4d4d4] bg-white outline-none box-border col-span-3 md:col-span-4'
                                ref={ingInput}
                            />
                            <button
                                onClick={handleAdd}
                                className=' bg-[#58249c] w-full text-white px-3 py-2  rounded-xl cursor-pointer font-medium'
                            >Add</button>
                        </div>
                        <p className=' text-left'>Current Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
                    </div>
                    <div className='space-y-2 text-base'>
                        <label htmlFor='method' className='block text-left font-medium'>Recipe Method: </label>
                        <textarea
                            type='text'
                            value={method}
                            onChange={(e) => setmethod(e.target.value)}
                            required
                            className='appearance-none relative block w-full px-3 py-2 rounded-lg border border-[#d4d4d4] bg-white outline-none box-border'
                        />
                    </div>

                    <CustomLabel
                        htmlFor='cookingTime'
                        labelText='Cooking Time (minutes):'
                        inputType='number'
                        inputValue={cookingTime}
                        onChange={(e) => setCookingTime(e.target.value)}

                    />
                    <button
                        type='submit'
                        className=' bg-[#58249c] text-white px-4     py-2 text-lg rounded-xl cursor-pointer mx-auto mt-2 font-semibold'
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create