import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

import Footer  from "../shared/components/Footer";
import Header from "../shared/components/Header";

export const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};