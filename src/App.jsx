import './App.css'
import React from "react";
import styled from "styled-components";
import { SideDeck } from "./components/side-deck/index";
import { OnMapCard } from "./components/on-map-card/index"
import { InfoCard } from './components/info-card';
import { Header } from './components/header';
function App() {


  return (
    <>
      <Header/>
      <SideDeck />
      <InfoCard/>
      <OnMapCard/>
    </>
  )
}

export default App


