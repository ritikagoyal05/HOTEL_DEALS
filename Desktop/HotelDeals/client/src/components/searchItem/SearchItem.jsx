import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  let hotelImage = '';
  if (item._id === '645d2032f82d56387880e1a7') {
    hotelImage = 'https://m.lemontreehotels.com/getattachment/cd3ded7b-ab61-4e1a-b6fc-e7529bc260d4/exterior.aspx';
  } else if (item._id === '645d215af82d56387880e1d6') {
    hotelImage = 'https://image.architonic.com/imgArc/project-1/4/5202616/SOM-Park-Hotel-Hyderabad_East_Exterior_Dusk_PallonDaruwala.jpg';
  } else if (item._id === '645d222df82d56387880e1ee') {
    hotelImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHClzzDOKJ7HgG27SN6C7C3OPY1qvctD5QKw&usqp=CAU';
  }else if (item._id === '645d22b3f82d56387880e21a') {
    hotelImage = 'https://ak-d.tripcdn.com/images/220c180000014mmltA910_R_800_525.jpg';
  } else if (item._id==='645d23a0f82d56387880e265'){
    hotelImage='https://cf.bstatic.com/xdata/images/hotel/max500/138717516.jpg?k=ed28b115cb6b2ab1d19df4e2a88d40c84798c663f876ad305b3f38359eb988be&o=&hp=1'
  }else if (item._id==='645d328bf82d56387880e2a7'){
    hotelImage='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/f6/8d/84/pool.jpg?w=700&h=-1&s=1'
  }else if (item._id==='645d35a8f82d56387880e2ad'){
    hotelImage='https://www.oyster.com/wp-content/uploads/sites/35/2019/05/adult-pool-v15704447-1440.jpg'
  }else if (item._id==='645dd7588bc3115510986c75'){
    hotelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1gdqDpklLyNJGBrXlk-zb3tJcTMPy30FAw&usqp=CAU'
  }else if(item._id==='645dd8848bc3115510986c7a'){
    hotelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4lrbthZ5LzzmUC4wS11snDdjZ5ma12eiuQ&usqp=CAU'
  }else if(item._id==='645dd9b38bc3115510986c7c'){
    hotelImage='https://r1imghtlak.mmtcdn.com/35b28db6a01511eaa04f0242ac110002.jpg'
  }else {
    hotelImage = 'https://example.com/default-image.jpg';
  }
  
  return (
    <div className="searchItem">
      <img src={hotelImage} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
