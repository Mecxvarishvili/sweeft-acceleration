import { useRef, useCallback, useState } from "react"
import Image from "../types/image"
import ImageCard from "./ImageCard"
import ImageModal from "./ImageModal"
import SkeletonLoader from "./SkeletonLoader"

type Props = {
    isLoading: boolean,
    data: Image[],
    hasNextPage: boolean,
    setPage: Function,
}

function InfiniteScroll ({ isLoading, data, hasNextPage, setPage}: Props) {
    const [ imageId, setImageId ] = useState<string>()
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
    <div className="infinite-scroll" >
        <div className="images-container" >
        {
            data.length ? data.map((image, i) => 
            data.length === i + 1 ?
            <ImageCard imageRef={lastImageElementRef} key={image.id} data={image} setModal={setImageId}/> : 
            <ImageCard key={image.id} data={image} setModal={setImageId}/>)
            : !isLoading && <div className="not-found" >Result not found</div>
        }
        { isLoading && <SkeletonLoader />}
        </div>
        {imageId && <ImageModal id={imageId} setModal={setImageId}/>}
        
    </div>
    )
}

export default InfiniteScroll;