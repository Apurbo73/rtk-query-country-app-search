import React from "react";

import "./App.css";
import { useGetAllQuery } from "./features/apiSlice";
import Home from "./pages/Home";

function App() {
  const { data: all, isLoading, isError } = useGetAllQuery();
  // console.log(all)
  return (
    <div>
      {all && <Home all={all} />}
    </div>
  );
}

export default App;
