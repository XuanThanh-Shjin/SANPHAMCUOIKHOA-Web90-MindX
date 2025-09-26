import React from 'react'
import './Property.css'
import { assets } from '../../assets/assets'

const Property = () => {
  return (
    <div className='Property'>
        <div className='PropertyItems'>
            <img src={assets.khachsanImgProperty} alt="" className='PropertyImg'/>
            <h1 className='PropertyTitle'>Khách sạn</h1>
        </div>
        <div className='PropertyItems'>
            <img src={assets.canhoImgProperty} alt="" className='PropertyImg'/>
            <h1 className='PropertyTitle'>Căn hộ</h1>
        </div>
        <div className='PropertyItems'>
            <img src={assets.resortImgProperty} alt="" className='PropertyImg'/>
            <h1 className='PropertyTitle'>Resort</h1>
        </div>
        <div className='PropertyItems'>
            <img src={assets.bietthuImgProperty} alt="" className='PropertyImg'/>
            <h1 className='PropertyTitle'>Biệt thự</h1>
        </div>
    </div>
  )
}

export default Property