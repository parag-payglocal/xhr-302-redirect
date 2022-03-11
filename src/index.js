import ReactDOM from 'react-dom';
import './index.css';

import axios from 'axios';

const PayNow = () => {

  // using axios library(xhr)
  // const RedirectToPaymentPage = () => {
  //   axios.post('/pay', { amount : '500' });
  // };

  // using axios library(xhr)
  // const RedirectToPaymentPage = () => {
  //   axios.post('/pay', { amount : '500' }).then(() => {
  //     window.location.href = 'http://localhost:9000/get/pay';
  //   });
  // };

  // using browser redirect
  const RedirectToPaymentPage = () => {
    window.location.href = 'http://localhost:9000/get/pay';
  };

  return (
    <div className="container">
      <div className="card">
        <button onClick={RedirectToPaymentPage}>Pay Now</button>
      </div>
    </div>

  );
};

ReactDOM.render(<PayNow />,document.getElementById('root'));
