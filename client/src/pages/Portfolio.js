import React from 'react';
import Dashboard from '../components/Dashboard';

const PortfolioComponent = () => {
  return <div>This is the portfolio section</div>;
};

const Portfolio = () => {
  return <Dashboard children={<PortfolioComponent />} />;
};

export default Portfolio;
