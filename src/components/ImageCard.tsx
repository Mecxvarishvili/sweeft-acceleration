import React from 'react'
import Image from '../types/image'

type Props = {
    data: Image,
    imageRef?: React.LegacyRef<HTMLDivElement>
    setModal: Function
}

export default function ImageCard({data, imageRef, setModal}: Props) {

  return (
    <div className='image-card-cont' ref={imageRef} onClick={() => setModal(data.id)} >
        <img className="image-card" src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}
