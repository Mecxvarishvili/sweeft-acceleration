import { useEffect, useState } from "react"
import useImages from "../hook/useImages"
import InfiniteScroll from "../components/InfiniteScroll"

export default function History () {
    const [ query, setQuery ] = useState<string>('')
    const [ page, setPage ] = useState<number>(1)


    const { isLoading, allData, hasNextPage } = useImages(query, page)

    const history = ["car", "dog", "cat", "camel", "asdf"]

    return (
        <div>
            <div>History Page</div>
            <div>
                <div>last history:</div>
                {history.map((e) => (
                    <div onClick={() => setQuery(e)}>{e}</div>
                ))}
            </div>
            <div>
                {allData.length ? 
                <InfiniteScroll isLoading={isLoading} data={allData} hasNextPage={hasNextPage} setPage={setPage} /> :
                <div>select some history</div>}
            </div>
        </div>
    )
}