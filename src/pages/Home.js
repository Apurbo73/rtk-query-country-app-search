import React, { useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

const Home = ({ all }) => {
  const [alldata, setAlllData] = useState(all);
  // console.log(alldata)
  const [filterData, setFilterData] = useState(all);
  const handleSearch = searchText => {
    // alert(searchText)
    let text = searchText.toLowerCase();
    const newCountry = alldata.filter(country => {
      const name = country.name.common.toLowerCase();
      return name.startsWith(text);
    });
    setFilterData(newCountry);
  };
  return (
    <div>
      <Search search={handleSearch} />
      {all && <Countries countries={filterData} />}
    </div>
  );
};

export default Home;
