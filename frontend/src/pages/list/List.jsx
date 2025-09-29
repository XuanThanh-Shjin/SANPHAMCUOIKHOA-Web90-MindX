import "./list.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/searchItem/SearchItem.jsx";

const List = () => {
  
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTittle">Tìm kiếm</h1>
            <div className="lsItem">
              <label >Điểm đến</label>
              <input placeholder="{destination}" type="text" />
            </div>
            <div className="lsItem">
              <label >Ngày Check-in</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && ( 
                <DateRange
                  onChange={item=>setDate([item.selection])} 
                  minDate={new Date()}
                  ranges={date}
              />)}
            </div>
            <div className="lsItem">
              <label>Tùy chọn</label>
              <div className="lsOptions">

              
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá thấp nhất <small>mỗi đêm</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá cao nhất <small>mỗi đêm</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Người lớn 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Trẻ em
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Phòng
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
              </div>
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="listResult"> 
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
          </div>
        </div>
      </div>
  );
};

export default List;