// CryptoDashboard.jsx
import React from "react";
import "./CryptoDashboard.css";
import CryptoBalance from "./CryptoBalance";
import CryptoChart from "./CryptoChart";
import CryptoList from "./CryptoList";

import FinancialStatus from "./FinancialStatus";

// import WeeklySalesTable from "./WeeklySalesTable";

const CryptoDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-icon">💰</div>
        <div className="dashboard-header-text">
          <h2 className="dashboard-title">Expenses</h2>
          <p className="dashboard-subtitle">Track and analyze your expenses</p>
        </div>
        <button className="export-btn">
          <span className="export-icon">⬇</span> Export
        </button>
      </div>

      <div className="dashboard-body">
        <div className="dashboard-content">
          <CryptoBalance />
          <CryptoChart />
        </div>
        <CryptoList />
      </div>
      <div className="dashboard-financial">
        <FinancialStatus />
      </div>
    </div>
  );
};

export default CryptoDashboard;
