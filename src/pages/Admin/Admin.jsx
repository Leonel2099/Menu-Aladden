import React from "react";
import { Route, Routes } from "react-router-dom";
import TabsViewAdmin from "./TabsViewAdmin/TabsViewAdmin";
import TabViewUsuario from "../../pages/Admin/TabsViewAdmin/TabViewUsuario/TabViewUsuario";
import TabViewPlatos from "../../pages/Admin/TabsViewAdmin/TabViewPlatos/TabViewPlatos";
import TabViewPedidos from "../../pages/Admin/TabsViewAdmin/TabViewPedidos/TabViewPedidos";
const Admin = () => {
  return (
    <div className="mainSection">
      <section>
        <h2 className="text-center text-white display-2">Administrador</h2>
        <TabsViewAdmin></TabsViewAdmin>
        <Routes>
          <Route exact path="/" element={<TabViewUsuario />} />
          <Route exact path="/tabViewDishes" element={<TabViewPlatos />} />
          <Route exact path="/tabViewOrders" element={<TabViewPedidos />} />
        </Routes>
      </section>
    </div>
  );
};

export default Admin;
