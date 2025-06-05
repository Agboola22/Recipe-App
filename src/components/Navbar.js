import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useTheme } from '../Hooks/useTheme'
// bg-[#58329c]
// 

const Navbar = () => {
    const { color } = useTheme()
    return (
        <div style={{ background: color }} className={` text-white px-4 py-4 flex justify-between md:justify-around items-center shadow-md `} >
            <Link to='/'>
                <h2 className='text-2xl font-bold tracking-wider '>Cooking<span className='text-red-600'>Ninja</span></h2>
            </Link>
            <div className='hidden md:flex gap-6 items-center'>
                <Searchbar />
                <Link to='/create'
                    className=' border-2 border-white rounded px-3 py-2 tracking-wide '

                >Create Recipe</Link>
            </div>
            <div className='block md:hidden text-2xl'>
                <button><FaBars /></button>
            </div>
        </div>
    )
}

export default Navbar