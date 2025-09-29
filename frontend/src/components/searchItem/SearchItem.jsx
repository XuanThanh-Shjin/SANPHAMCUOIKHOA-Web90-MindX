import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src=""
        alt="" 
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTittle">Tower Street Apartments</h1>
            <span className="siDistance">Cách trung tâm 500m</span>
            <span className="siTaxiOp">Miễn phí taxi sân bay</span>
            <span className="siSubtitle">
                Căn hộ Studio có điều hòa
            </span>
            <span className="siFeatures">
                Toàn bộ studio • 1 phòng tắm • 21m² 1 giường lớn
            </span>
            <span className="siCancelOp">Hủy miễn phí</span>
            <span className="siCancelOpSubtitle"> 
                Bạn có thể hủy sau, vì vậy hãy đặt với mức giá tuyệt vời này ngay hôm nay!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Xuất sắc</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Đã bao gồm phí và thuế</span>
                <button className="siCheckButton">Xem phòng trống</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
