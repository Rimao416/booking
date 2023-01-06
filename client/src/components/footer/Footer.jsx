import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Pays</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cités</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Aéroports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Accueil </li>
          <li className="fListItem">Appartements</li>
          <li className="fListItem">Ressorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Principales maisons</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique place où vivre </li>
          <li className="fListItem">Nouvelles</li>
          <li className="fListItem">Articles de voyage</li>
          <li className="fListItem">Rencontrer la communauté </li>
          <li className="fListItem">Vacances </li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Voyage.</div>
    </div>
  );
};

export default Footer;
