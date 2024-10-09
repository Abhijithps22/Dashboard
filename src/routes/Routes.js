import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../App.css"

const Loader = () => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <div className="loader">
      <div className="spinner"></div>
    </div>
  </div>
);

const Routes = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <Sidebar />}</>;
};

export default Routes;
