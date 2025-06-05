import { useEffect, useState } from 'react'
// import { useFetch } from '../../Hooks/useFetch'
import RecipeCard from '../../components/RecipeCard'
import './Home.css'
import { projectFirestore } from '../../firebase/Config'

const Home = () => {
    // const { data: recipesData, isPending, error } = useFetch('http://localhost:3000/recipes')
    // console.log(recipes)
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('no recipes found')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    // console.log(doc)
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
            }, (err) => {
                setError(err.message)
                setIsPending(false)
        })

        return () =>unsub()
    }, [])
    return (
        <div className=' mx-auto my-16 w-4/5'>
            {isPending &&
                <div class="loading-spinner">
                    <div class="spinner"></div>
                </div>}
            {error && <div>{error}</div>}
            {data && <RecipeCard recipes={data} />}
            {/* {recipesData && <RecipeCard recipes={recipesData.recipes} />} */}
        </div>
    )
}

export default Home