import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <div className="card m-2 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
        <img
          style={{ height: 180 }}
          src={country.flags.png}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center mb-5">
            {country.name.common}
          </h5>

          <a href="#" className="btn btn-outline-danger w-100">
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
