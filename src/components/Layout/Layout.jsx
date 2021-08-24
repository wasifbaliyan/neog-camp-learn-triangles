import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </div>
  );
}
