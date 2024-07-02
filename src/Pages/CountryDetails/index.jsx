/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CountryContext } from "../../context/CountryProvider";
import ShowMap from "../../components/ShowMap";

const CountryDetails = () => {
  const [showMap, setShowMap] = useState(false);
  const { name } = useParams();
  const { countries } = useContext(CountryContext);
  const country = countries.find((country) => country.name.common === name);

  if (!country) {
    return <p>Country not found.</p>;
  }

  const {
    flags,
    capital,
    population,
    region,
    subregion,
    languages,
    currencies,
  } = country;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-4">
      <figure>
        <img src={flags.png} alt="flag" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Subregion: {subregion}</p>
        <p>Languages: {Object.values(languages).join(", ")}</p>
        <p>
          Currencies:{" "}
          {Object.values(currencies)
            .map((currency) => currency.name)
            .join(", ")}
        </p>
        <button
          onClick={() => setShowMap(!showMap)}
          className="btn btn-primary"
        >
          {showMap ? "Hide Map" : "Show Map"}
        </button>
        {showMap && <ShowMap country={country} />}
      </div>
    </div>
  );
};

export default CountryDetails;
