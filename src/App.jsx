import React from "react";
import HeaderCard from "./components/HeaderCard/HeaderCard";
import Information from "./components/Information/Information";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <main>
      <HeaderCard />
      <article>
        <Chart />
        <Information />
      </article>
    </main>
  );
}

export default App;
