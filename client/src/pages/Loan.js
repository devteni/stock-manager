import React from 'react';
import Dashboard from '../components/Dashboard';

const LoanComponent = () => {
  return <div>This is the loan section</div>;
};

const Loan = () => {
  return <Dashboard children={<LoanComponent />} />;
};

export default Loan;
