import React from "react";
import "../Home/Home.css";
import Hero from "./views/Hero/Hero";
import TabsView from "./views/TabsView/TabsView";
import TabViewAbout from "./views/TabsView/TabViewAbout/TabViewAbout";
import TabViewMenu from "./views/TabsView/TabViewMenu/TabViewMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Hero></Hero>
      <BrowserRouter>
        <TabsView></TabsView>
        <Routes>
          <Route exact path="/tabViewAbout" element={<TabViewAbout></TabViewAbout>}></Route>
          <Route exact path="/tabViewMenu" element={<TabViewMenu></TabViewMenu>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
