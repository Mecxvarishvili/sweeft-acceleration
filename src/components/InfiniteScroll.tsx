import { useRef, useCallback, useState } from "react"
import Image from "../types/image"
import ImageCard from "./ImageCard"
import ImageModal from "./ImageModal"

type Props = {
    isLoading: boolean,
    data: Image[]
    hasNextPage: boolean
    setPage: Function,
}


function InfiniteScroll ({ isLoading, data, hasNextPage, setPage}: Props) {
    const [ modal, setModal ] = useState<Image | undefined>()
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

    }, [/*isLoading, hasNextPage*/])

   return (
    <div className="infinite-scroll" >
        <div className="images-container" >
        {
            data && data.map((image, i) => 
            data.length === i + 1 ?
            <ImageCard imageRef={lastImageElementRef} key={image.id} data={image} setModal={setModal}/> : 
            <ImageCard key={image.id} data={image} setModal={setModal}/>)
        }
        </div>
        { isLoading && <div>loading...</div> }
        {modal && <ImageModal data={modal} setModal={setModal}/>}
        
    </div>
    )
}

export default InfiniteScroll;