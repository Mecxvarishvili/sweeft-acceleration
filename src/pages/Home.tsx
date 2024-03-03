import SearchBar from "../components/SearchBar";
import { useEffect, useState, useContext } from "react"
import useImagesFetch from "../hook/useImagesFetch";
import InfiniteScroll from "../components/InfiniteScroll";
import { Link } from "react-router-dom";
import SearchHistoryContext from "../SearchHistoryContext";

export default function Home () {
    const [ inputValue, setInputValue ] = useState<string>()
    const [ page, setPage ] = useState<number>(1)
    const [ search, setSearch ] = useState<string>('')
    const { history, setHistory } = useContext(SearchHistoryContext)

    const { isLoading, allData, hasNextPage, data } = useImagesFetch(search, page)

    useEffect(() => {
        if(inputValue !== undefined) {
            const timeoutId = setTimeout(() => {
                setSearch(inputValue)
                setPage(1)
            }, 1000)
            return () => clearTimeout(timeoutId)
        }
    }, [inputValue])


    useEffect(() => {
        if (search !== '' && data && !!data.length &&  !history.some(e => e === inputValue)) {
            setHistory((currHistory: string[]) => [...currHistory, inputValue])
            console.log('use')
        }
    }, [data])

    return (
        <main className='main'>
            <div className="header" >
                <div className="title" >Photo Gallery</div>
                <Link className="link" to="/history">History</Link>
            </div>
            <SearchBar handleChange={setInputValue} />
            <InfiniteScroll isLoading={isLoading} data={allData} hasNextPage={hasNextPage} setPage={setPage} />
        </main>
    )
}