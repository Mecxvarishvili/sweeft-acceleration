import React, { useEffect, useState } from 'react'
import { TbDownload } from "react-icons/tb";
import { GrView } from "react-icons/gr";
import { BiSolidLike } from "react-icons/bi";
import { getSingleImage } from '../api/api';
import { SingleImage } from '../types/image';

type Props = {
    id: string,
    setModal: Function
}

export default function ImageModal({id, setModal}: Props) {
    const [ data, setData ] = useState<SingleImage>()

    useEffect(() => {
        getSingleImage(id)
        .then(res => {
            setData(res)
        })
    }, [])

    //create error catch

  return (
    <div className="modal-block" onClick={() => setModal()} >
        <div className="modal-container" onClick={(e) =>e.stopPropagation()} >
            <div>
                <div className="exit-arrow"  onClick={() => setModal()} >&#x2715;</div>
            </div>
            {
                data ? 
                <div>
                    <img className='modal-image' src={data.urls.regular} alt="" />
                    <div className='about-cont' >
                        <div>
                            <BiSolidLike className='svg-icon' />
                            <span>{data.likes}</span>
                        </div>
        
                        <div>
                            <GrView className='svg-icon' />
                            <span>{data.views}</span>
                        </div>
        
                        <div>
                            <TbDownload className='svg-icon' />
                            <span>{data.downloads}</span>
                        </div>
                    </div>
                </div> :
                <div>loading...</div>
            }
        </div>
    </div>
  )
}
