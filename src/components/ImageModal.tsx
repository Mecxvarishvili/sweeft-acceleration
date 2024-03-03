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

    function handleClose () {
        setModal()
    }

    //create error catch

  return (
    <div className="modal-block" onClick={handleClose} >
        <div className="modal-container" onClick={(e) =>e.stopPropagation()} >
            <div>
                <div className="exit-arrow"  onClick={handleClose} >&#x2715;</div>
            </div>
            {
                data ? 
                <>
                    <img className='modal-image' src={data.urls.regular} alt="" />
                    <div className='about-cont' >
                        <div className="about-box" >
                            <BiSolidLike className='svg-icon' />
                            <span>{data.likes}</span>
                        </div>
        
                        <div className="about-box">
                            <GrView className='svg-icon' />
                            <span>{data.views}</span>
                        </div>
        
                        <div className="about-box">
                            <TbDownload className='svg-icon' />
                            <span>{data.downloads}</span>
                        </div>
                    </div>
                </> :
                <div className="card is-loading image-card-cont">
                    <div className="image"></div>
                </div>
            }
        </div>
    </div>
  )
}
