import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Goa,Delhi,Hyderabad,Mumbai"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://curlytales.com/wp-content/uploads/2020/07/alexey-turenkov-bWJiSZjIgTM-unsplash.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://1.bp.blogspot.com/-egYAYG3T5Jo/VGLvxkOT08I/AAAAAAAABJ8/yhY4S2iCB6g/s1600/darjeeling3_2443248b.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://4.bp.blogspot.com/_R_B1luv2EgY/THsK-BCiOWI/AAAAAAAAAbo/WKwXTclC_BU/s1600/hyderabad.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/originals/4e/62/f1/4e62f1a470ee99a18c57bea22f9a2bb9.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
