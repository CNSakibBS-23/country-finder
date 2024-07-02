/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import SeeAllCounturies from "../SeeAllCounties";
import { CountryContext } from "../../context/CountryProvider";

const SearchBar = () => {
  const { countries } = useContext(CountryContext);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = countries.filter((value) => {
      return value.name.common.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <>
      <div className="flex justify-center mb-10">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Search Your Country!</span>
            <span className="label-text">
              Total Country: {countries?.length}
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={wordEntered}
            onChange={handleSearch}
          />
        </label>
      </div>
      {filteredData.length !== 0 && (
        <h1 className="text-center text-3xl bold m-4">
          Country Found: {filteredData.length}
        </h1>
      )}
      <div>
        <SeeAllCounturies countries={countries} filteredData={filteredData} />
      </div>
    </>
  );
};

export default SearchBar;
