import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { fetchContributors } from "./api";

import { DetailView, ListView, Title } from "./components";

const App = () => {
  const [detailResults, setDetailResults] = useState([]);
  const [listResults, setListResults] = useState([]);

  const getData = async () => {
    let fetchedData = await fetchContributors();
    await setListResults(fetchedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Title />
      <ListView
        listResults={listResults}
        setListResults={setListResults}
        setDetailResults={setDetailResults}
      />
      <DetailView
        detailResults={detailResults}
        setDetailResults={setDetailResults}
      />
    </div>
  );
};

export default App;
