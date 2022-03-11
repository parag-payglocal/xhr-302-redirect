import ReactDOM from 'react-dom';
import './index.css';


const PayNow = () => {

  // using browser fetch
  const RedirectToPaymentPage = () => {
    fetch('/pay');
  };

  // using axios library
  // const RedirectToPaymentPage = () => {
  //   axios.get('/pay');
  // };

  // using browser redirect
  // const RedirectToPaymentPage = () => {
  //   window.location.href = '/pay';
  // };

  return (
    <div className="container">
      <div className="card">
        <button onClick={RedirectToPaymentPage}>Pay Now</button>
      </div>
    </div>
  );
};

ReactDOM.render(<PayNow />,document.getElementById('root'));
