/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { name, flags, capital, population } = country;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={flags.png} alt="flag" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.common}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <div className="card-actions justify-end">
          <Link to={`/country/${name.common}`} className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
