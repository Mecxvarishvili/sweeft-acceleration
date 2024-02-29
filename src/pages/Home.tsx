import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react"
import useImages from "../hook/useImages";

export default function Home () {
    const [ inputValue, setInputValue ] = useState<string>('')
    const [ page, setPage ] = useState<number>(1)
    const [ query, setQuery ] = useState<string>('')

    const { isLoading, hasNextPage, data } = useImages(query, page)

    useEffect(() => {
            const timeoutId = setTimeout(() => {
                setQuery(inputValue)
                setPage((currPage) => (currPage + 1))
                console.log("event run")
            }, 1000)
            return () => clearTimeout(timeoutId)
    }, [inputValue])

    return (
        <main>
            <SearchBar handleChange={setInputValue} />
            {data && data.map(datum => {
                return(
                    <div>datu</div>
                )
            })}
            {isLoading && <div>loading...</div>}
        </main>
    )
}