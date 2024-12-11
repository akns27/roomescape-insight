import './App.css'
// import React from "react";
// import styled from "styled-components";
import SideDeck  from "./components/side-deck/index.jsx";
import OnMapCard from "./components/on-map-card/index.jsx"
import InfoCard from './components/info-card/index.jsx';
import Header from "./components/header/index.jsx";
function App() {


  return (
    <>
      <Header/>
      <SideDeck />
      {/* <InfoCard/> */}
      {/* <OnMapCard/> */}
    </>
  )
}

export default App


