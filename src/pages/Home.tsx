import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react"
import useImages from "../hook/useImages";
import InfiniteScroll from "../components/InfiniteScroll";

export default function Home () {
    const [ inputValue, setInputValue ] = useState<string>()
    const [ page, setPage ] = useState<number>(1)
    const [ query, setQuery ] = useState<string>('')

    const { isLoading, allData, hasNextPage } = useImages(query, page)

    useEffect(() => {
        if(inputValue !== undefined) {
            const timeoutId = setTimeout(() => {
                setQuery(inputValue)
                setPage(1)
            }, 1000)
            return () => clearTimeout(timeoutId)
        }
    }, [inputValue])

    return (
        <main>
            <SearchBar handleChange={setInputValue} />
            <InfiniteScroll isLoading={isLoading} data={allData} hasNextPage={hasNextPage} setPage={setPage} />
        </main>
    )
}