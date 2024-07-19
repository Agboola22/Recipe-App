import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home'
import Create from '../pages/create/Create'
import Recipes from '../pages/recipes/Recipes'
import Search from '../pages/search/Search'
import Navbar from './Navbar'



const MyRoutes = () => {
    return (
        <div className=' w-full min-h-screen'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/recipes/:id' element={<Recipes />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRoutes