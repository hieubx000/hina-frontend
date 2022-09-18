import React from "react";
import Footer from "../../components/modules/footer";
import NavBar from "../../components/modules/navBar";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
