import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/mailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: ""
    },
    {
      src: ""
    },
    {
      src: ""
    },
    {
      src: ""
    },
    {
      src: ""
    },
    {
      src: ""
    },
  ];


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open &&<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Đặt chỗ trước hoặc đặt ngay!</button>
            <h1 className="hotelTittle">Khách sạn lớn</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>505 Minh Khai, Vĩnh Tuy, Hà Nội</span>
            </div>
            <span className="hotelDistance">
              Vị trí tuyệt vời - 500m từ trung tâm
            </span>
            <span className="hotelPriceHighLight">
              Đặt phòng nghỉ trên 3.700.000 VND tại khách sạn này và được miễn phí taxi sân bay
            </span>
            <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTittle">Ở giữa trung tâm của Hà Nội</h1>
                  <p className="hotelDesc">
                     Nằm cách phố Minh Khai ở Hà Nội 5 phút đi bộ, Tower Street Apartments cung cấp chỗ nghỉ với máy điều hòa và Wi-Fi miễn phí. Các căn hộ tại đây có sàn gỗ cứng, bếp nhỏ đầy đủ tiện nghi với lò vi sóng, TV màn hình phẳng và phòng tắm riêng đi kèm vòi sen cùng máy sấy tóc. Tủ lạnh, ấm đun nước và máy pha cà phê cũng được trang bị trong căn hộ. Các điểm tham quan nổi tiếng gần căn hộ bao gồm Times City, Hòa Bình Green City và Imperia. Sân bay gần nhất là sân bay Quốc tế Nội Bài, cách Tower Street Apartments 16,1 km, và chỗ nghỉ cung cấp dịch vụ đưa đón sân bay có tính phí.
                  </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Hoàn hảo cho kỳ nghỉ dài 1 tuần!</h1>
                <span>
                  Tọa lạc tại trung tâm thành phố Hà Nội, khách sạn này có điểm đánh giá vị trí tuyệt vời là 9,8!
                </span>
                <h2>
                  <b>20.570.000</b> (6 đêm)
                </h2>
                <button>Đặt chỗ trước hoặc đặt ngay!</button>
              </div>
            </div>
          </div>
          <MailList/>
          <Footer/>
      </div>
    </div>
  )
}

export default Hotel