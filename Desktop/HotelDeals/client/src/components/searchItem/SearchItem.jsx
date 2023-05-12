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
  }else if(item._id==='645de9f18bc3115510986c95'){
    hotelImage='https://www.authenticindiatours.com/app/uploads/2022/03/Trident-Hotel-Mumbai-1.jpg'
  }else if(item._id==='645deaf48bc3115510986c97'){
    hotelImage='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/7d/1f/0c/sea-green-south-hotel.jpg?w=700&h=-1&s=1'
  }else if(item._id==='645de77a8bc3115510986c93'){
    hotelImage='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/12/15/Pictures/_9f2b6346-ffd3-11e8-9457-b1b429387a4e.jpg'
  }else if(item._id==='645dec118bc3115510986c9a'){
    hotelImage='https://cf.bstatic.com/xdata/images/hotel/max1024x768/208529315.jpg?k=975d0ab198ac7628a728dc194e4eae9caeb5eaa4660bf669d83df792ca249fef&o=&hp=1'
  }else if(item._id==='645df0535bc42e0cfc1ac1b5'){
    hotelImage='https://cf.bstatic.com/xdata/images/hotel/max1280x900/420799696.jpg?k=baae8149ca1a0fe6cc6b1de12b0b768f6639bc75613376e4c09e4dc86f98f877&o=&hp=1'
  }else if(item._id==='645df1255bc42e0cfc1ac1cb'){
    hotelImage='https://cf.bstatic.com/xdata/images/hotel/max1280x900/250798430.jpg?k=77fb4113ec640c4b9df41857ff979a4455ea2ed72f415a27271db783ffd0ec1d&o=&hp=1'
  }else if(item._id==='645df2515bc42e0cfc1ac1d0'){
    hotelImage='https://www.maidenshotel.com/images/home-bg.jpg'
  }else if(item._id==='645e00fa5bc42e0cfc1ac1d5'){
    hotelImage='https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201411201543119738-b5663f3cb05d11ea8a260242ac110004.jpg'
  }else {
    hotelImage = 'https://pix10.agoda.net/hotelImages/486/48629/48629_15032518140026462090.jpg?ca=3&ce=1&s=1024x768';
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
