import React, { useEffect, useState } from "react";

const Search = props => {
  const [searchText, setSerachText] = useState("");
  useEffect(() => {
    props.search(searchText);
  }, [searchText]);
  return (
    <div>
      <div
        className="text-center mt-5 mb-5 bg-warning w-25 p-3 mx-auto rounded"
        onChange={e => {
          setSerachText(e.target.value);
        }}
      >
        <input type="text" placeholder="Search here" />
      </div>
    </div>
  );
};

export default Search;
