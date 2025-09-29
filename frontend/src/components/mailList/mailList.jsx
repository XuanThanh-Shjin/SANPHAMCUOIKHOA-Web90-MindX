import "./mailList.css"

const mailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTittle">Tiết kiệm thời gian, tiết kiệm chi phí!</h1>
        <span className="mailDesc">Đăng ký ngay để nhận được thông tin về các chương trình khuyến mãi hấp dẫn.</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Email" />
            <button>Đăng ký</button>
        </div>
    </div>
  )
}

export default mailList