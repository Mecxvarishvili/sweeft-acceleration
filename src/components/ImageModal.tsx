import React from 'react'
import Image from '../types/image'
import { TbDownload } from "react-icons/tb";
import { GrView } from "react-icons/gr";
import { BiSolidLike } from "react-icons/bi";

type Props = {
    data: Image,
    setModal: Function
}

export default function ImageModal({data, setModal}: Props) {
  return (
    <div className="modal-block" onClick={() => setModal()} >
        <div className="modal-container">
            <div>
                <div className="exit-arrow" >&#x2715;</div>
            </div>
            <img className='modal-image' src={data.urls.regular} alt="" />
            <div className='about-cont' >
                <div>
                    <BiSolidLike className='svg-icon' />
                    <span>value</span>
                </div>

                <div>
                    <GrView className='svg-icon' />
                    <span>value</span>
                </div>

                <div>
                    <TbDownload className='svg-icon' />
                    <span>value</span>
                </div>
            </div>
        </div>
    </div>
  )
}
