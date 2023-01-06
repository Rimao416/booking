import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m</span>
        <span className="siTaxiOp">Taxi Libre</span>
        <span className="siSubtitle">
          Avec de l'air conditionné
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Annulation libre</span>
        <span className="siCancelOpSubtitle">
          Admirez les prix
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Taxi inclus</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Voir la disponibilité</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
