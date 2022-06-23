import React from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "../Pages/PageHome/PageHome";
import MalePage from "../Pages/MalePage/MalePage"
import FemalePage from "../Pages/FemalePage/FemalePage";
import KidsPage from "../Pages/KidsPage/KidsPage";
import Login from "../Pages/Login/Login"
import ShoeMan from "../Pages/ShoeMan/ShoeMan";
import Detail from "../Pages/DetailPage/Detail";



const RoutesPage = (props) => {
  const {products} = props;
  return (
    <Routes>
      <Route path="/" element={<PageHome />}></Route>
      <Route path="/MalePage" element={<MalePage />}></Route>
      <Route path="/FemalePage" element={<FemalePage />}></Route>
      <Route path="/KidsPage" element={<KidsPage />}></Route>
      <Route path="/account-Login" element={<Login />}></Route>
      <Route path="/shoe-man" element={<ShoeMan />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
};
export default RoutesPage;
