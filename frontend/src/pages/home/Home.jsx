import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import './home.css'
import Property from '../../components/property/Property'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='HomeContainer'>
          <h1 className="HomeTitle">Điểm đến đang thịnh hành</h1>
          <p className='HomeText'>Các lựa chọn phổ biến nhất cho du khách từ Việt Nam</p>
          <Featured />
          <h1 className="HomeTitle">Tìm theo loại chỗ nghỉ</h1>
          <Property />
        </div>
    </div>
  )
}

export default Home