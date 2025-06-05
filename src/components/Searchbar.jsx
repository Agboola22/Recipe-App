import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search?query=${term}`)
    }
    const handleBlur = () => {
        setTerm(''); // Clear the input field when it loses focus
    };
    return (
        <div>
            <form onSubmit={handleSearch} className='flex gap-3 items-center'>
                <label htmlFor='search' className='text-lg'>
                    Search :
                </label>
                <input
                    type='text'
                    onBlur={handleBlur}
                    onChange={(e) => setTerm(e.target.value)}
                    className='px-6 py-2 rounded cursor-pointer text-black block outline-none focus:ring-1 bg-[#dfdfdf]'
                    required
                />
            </form>
        </div>
    )
}

export default Searchbar