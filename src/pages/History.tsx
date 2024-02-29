import { useState } from "react"
import useImages from "../hook/useImages"

export default function History () {
    const [ query, setQuery ] = useState<string>('')
    const [ page, setPage ] = useState<number>(1)

    // const [ isLoading, hasNextPage, data ] = useImages(query, page)

    return (
        <div>history</div>
    )
}