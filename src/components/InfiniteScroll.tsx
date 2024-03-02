import { useRef, useCallback } from "react"
import Images from "../types/image"

type Props = {
    isLoading: boolean,
    data: Images[]
    hasNextPage: boolean
    setPage: Function,
}


function InfiniteScroll ({ isLoading, data, hasNextPage, setPage}: Props) {
    const observer = useRef<IntersectionObserver>()

    const lastImageElementRef = useCallback((image: HTMLDivElement) => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(images => {
            if(images[0].isIntersecting && hasNextPage) {
                setPage((currPage: number) => currPage + 1)
            }
        })
        if(image)  observer.current.observe(image)

    }, [isLoading, hasNextPage])

   return (
    <div>
        {data && data.map((datum, i) => {
            if(data.length === i + 1) {
                return (<div ref={lastImageElementRef}>{datum.title}</div>)
            }
            return (<div>{datum.title}</div>)
        })}
        { isLoading && <div>loading...</div> }
    </div>
    )
}

export default InfiniteScroll;