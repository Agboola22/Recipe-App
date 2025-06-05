import { useTheme } from '../Hooks/useTheme'
import { CiLight } from 'react-icons/ci'
const themeColors = ['#58329c', '#249c6b', '#b70233']
const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme()
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    // console.log(mode) 

    return (
        <div className=" mt-4 flex justify-between items-center max-w-6xl mx-auto">
            <div>
                <CiLight
                    onClick={toggleMode}
                    className={`w-7 h-7 cursor-pointer`}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>
            <div>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                        className=" inline-block w-5 h-5 cursor-pointer ml-4 rounded-full " />
                ))}
            </div>
        </div>
    )
}

export default ThemeSelector