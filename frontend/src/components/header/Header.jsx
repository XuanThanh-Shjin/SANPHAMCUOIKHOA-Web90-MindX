import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faMap, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({ type }) => {

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className='Header'>
      <div className={type === "List" ? "HeaderContainer listMode" : "HeaderContainer"}>
        <div className="HeaderList">
          <div className="HeaderListItems active">
              <FontAwesomeIcon icon={faBed} />
              <span>Lưu trú</span>
          </div>
          <div className="HeaderListItems">
              <FontAwesomeIcon icon={faCar} />
              <span>Thuê xe</span>
          </div>
          <div className="HeaderListItems">
              <FontAwesomeIcon icon={faPlane} />
              <span>Chuyến bay</span>
          </div>
          <div className="HeaderListItems">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Taxi sân bay</span>
          </div>
          <div className="HeaderListItems">
              <FontAwesomeIcon icon={faMap} />
              <span>Khám phá</span>
          </div>
        </div>
        <h1 className="HeaderTitle">Thoả sức du lịch</h1>
        <p className="HeaderDesc">Khám phá, lựa chọn và đặt chỗ khách sạn phù hợp nhất cho chuyến đi của bạn</p>
        <button className="HeaderBtn">Đăng ký / Đăng nhập</button>
        <div className="HeaderSearch">
          <div className="HeaderSearchItems">
            <FontAwesomeIcon icon={faBed} className='HeaderIcon' />
            <input type="text" placeholder='Bạn muốn đi đâu?' className='HeaderSearchInput' />
          </div>
          <div className="HeaderSearchItems">
            <FontAwesomeIcon icon={faCalendarDays} className='HeaderIcon' />
            <span onClick={() => setOpenDate(!openDate)} className='HeaderSearchText'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
            {openDate && (<DateRange
              className='HeaderDate'
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
            />)}
          </div>
          <div className="HeaderSearchItems">
            <FontAwesomeIcon icon={faPerson} className='HeaderIcon' />
            <span onClick={() => setOpenOptions(!openOptions)} className='HeaderSearchText'>{`${options.adult} Người lớn - ${options.children} Trẻ nhỏ - ${options.room} Phòng`}</span>
            {openOptions && (
              <div className="HeaderOptions">
                <div className="HeaderOptionItem">
                  <span className="HeaderOptionText">Người lớn</span>
                    <div className="HeaderOptionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="HeaderOptionCounterButton"
                        onClick={() => handleOption("adult", "decrease")}
                      >
                        -
                      </button>
                      <span className="HeaderOptionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="HeaderOptionCounterButton"
                        onClick={() => handleOption("adult", "increase")}
                      >
                        +
                      </button>
                    </div>
                </div>
                <div className="HeaderOptionItem">
                    <span className="HeaderOptionText">Trẻ nhỏ</span>
                    <div className="HeaderOptionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="HeaderOptionCounterButton"
                        onClick={() => handleOption("children", "decrease")}
                      >
                        -
                      </button>
                      <span className="HeaderOptionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="HeaderOptionCounterButton"
                        onClick={() => handleOption("children", "increase")}
                      >
                        +
                      </button>
                    </div>
                </div>
                <div className="HeaderOptionItem">
                    <span className="HeaderOptionText">Phòng</span>
                    <div className="HeaderOptionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="HeaderOptionCounterButton"
                        onClick={() => handleOption("room", "decrease")}
                      >
                        -
                      </button>
                      <span className="HeaderOptionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="HeaderOptionCounterButton"
                        onClick={() => handleOption("room", "increase")}
                      >
                        +
                      </button>
                    </div>
                </div>
              </div>
            )}
          </div>
          <div className="HeaderSearchItems">
            <button className="HeaderSearchBtn">Tìm kiếm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
