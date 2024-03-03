import { useContext, useState } from "react"
import useImagesFetch from "../hook/useImagesFetch"
import InfiniteScroll from "../components/InfiniteScroll"
import { Link } from "react-router-dom"
import SearchHistoryContext from "../SearchHistoryContext"

export default function History () {
    const [ search, setSearch ] = useState<string>('')
    const [ page, setPage ] = useState<number>(1)
    const { history } = useContext(SearchHistoryContext)

    const { isLoading, allData, hasNextPage } = useImagesFetch(search, page)


    return (
        <div className="block" >
            <div className="header" > 
                <div className="title">History Page</div>
                <Link className="link" to="/">Home </Link>
            </div>
            {history.length ?
                <div className="history-main" >
                    <div className="select-history" >Select history:</div>
                    <div className="history-result-cont" >
                    {history.map((e) => (
                        <div key={e} className="history-search" onClick={() => {setSearch(e); setPage(1)}}>{e}</div>
                    ))}
                    </div>
                    <div>
                        {!!search.length && <InfiniteScroll isLoading={isLoading} data={allData} hasNextPage={hasNextPage} setPage={setPage} />}
                    </div>
                </div>:
                <div className="history-nothing">There is nothing in history yet</div>
            }
        </div>
    )
}