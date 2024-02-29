import getImages from "../api/getImages";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react"
import { Image } from "../types/image";

export default function Home () {
    const [ inputValue, setInputValue ] = useState<string>('')
    const [ images, setImages ] = useState<Image[]>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getImages()
                setImages(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if(inputValue !== '') {
            const timeoutId = setTimeout(() => {
                console.log("fetch data")
            }, 1000)
            return () => clearTimeout(timeoutId)
        }
    }, [inputValue])

    return (
        <main>
            <SearchBar handleChange={setInputValue} />
        </main>
    )
}