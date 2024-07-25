import React from 'react'


const CustomLabel = ({
    htmlFor,
    labelText,
    inputType,
    inputValue,
    onChange,

}) => {
    return (
        <div className='space-y-2 text-base'>
            <label htmlFor={htmlFor} className='block text-left font-medium'> {labelText} </label>
            <input
                type={inputType}
                value={inputValue}
                onChange={onChange}
                required
                className='appearance-none relative block w-full px-3 py-2 rounded-lg border border-[#d4d4d4] bg-white outline-none'
            />
        </div>
    )
}

export default CustomLabel