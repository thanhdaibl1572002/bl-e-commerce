import { useState, useEffect } from 'react'

const useMediaScreen = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return screenWidth
}

export default useMediaScreen
