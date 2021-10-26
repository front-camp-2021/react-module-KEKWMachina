import { Link } from "react-router-dom";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs__home-button"></Link>
      <div className="breadcrumbs__arrows"></div>
      <div className="breadcrumbs__active-page">eCommerce</div>
      <div className="breadcrumbs__arrows"></div>
      <div className="breadcrumbs__page">Electronics</div>
    </div>
  );
}

export default Breadcrumbs;
