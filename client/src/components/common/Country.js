import React from "react";
import PropTypes from "prop-types";

const handleImage = (countries, countryid) => {
  const item = countries.find(country => country._id === countryid);
  return !item ? "-" : item.abbrevation;
};

const handleAbbrevation = (countries, countryid) => {
  const item = countries.find(country => country._id === countryid);
  return !item ? "-" : item.abbrevation;
};

const Country = ({ countries, countryid }) => {
  return (
    <>
      <img
        src={`/countries/${handleImage(countries, countryid)}.png`}
        alt={handleImage(countries, countryid)}
      />
      {`  ${handleAbbrevation(countries, countryid)}`}
    </>
  );
};

Country.propTypes = {
  countries: PropTypes.array.isRequired,
  countryid: PropTypes.string.isRequired
};

export default Country;
