import ReactDOM from 'react-dom';
import './index.css';

import axios from 'axios';

const PayNow = () => {

  // using browser fetch
//  const RedirectToPaymentPage = () => {
//    fetch('/pay');
//  };
//
//   using axios library
//   const RedirectToPaymentPage = () => {
//     axios.get('/pay');
//   };

  // using browser redirect
   const RedirectToPaymentPage = () => {
     window.location.href = 'http://localhost:9000/pay';
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
