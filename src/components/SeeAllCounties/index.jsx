/* eslint-disable react/prop-types */
import { useContext } from "react";
import Card from "../shared/Card/Card";
import { CountryContext } from "../../context/CountryProvider";

const SeeAllCounturies = ({ countries, filteredData }) => {
  const { loading, error } = useContext(CountryContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <section>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {filteredData?.length === 0 &&
          countries?.map((country, index) => (
            <Card key={index} country={country} />
          ))}
        {filteredData?.length !== 0 &&
          filteredData?.map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </div>
    </section>
  );
};

export default SeeAllCounturies;
