import React from "react";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import { Residencies } from "../Components/Residencies/residencies";
import { Footer } from "../Components/Footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Residencies />
      <Footer />
    </div>
  );
};
