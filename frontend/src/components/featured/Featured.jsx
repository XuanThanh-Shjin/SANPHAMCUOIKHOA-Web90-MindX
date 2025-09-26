import React from 'react'
import './Featured.css'
import { assets } from '../../assets/assets'

const Featured = () => {
  return (
    <div className='Featured'>
      <div className="FeaturedItems">
        <img src={assets.hcmImgFeatured}alt="" className='FeaturedImg'/>
        <div className='FeaturedTitle'>
          <h1>Tp.Hồ Chí Minh</h1>
        </div>
      </div>
      <div className="FeaturedItems">
        <img src={assets.hnImgFeatured} alt="" className='FeaturedImg'/>
        <div className='FeaturedTitle'>
          <h1>Hà Nội</h1>
        </div>
      </div>
      <div className="FeaturedItems">
        <img src={assets.dalatImgFeatured} alt="" className='FeaturedImg'/>
        <div className='FeaturedTitle'>
          <h1>Đà Lạt</h1>
        </div>
      </div>
    </div>
  )
}

export default Featured