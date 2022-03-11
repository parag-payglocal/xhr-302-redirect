import ReactDOM from 'react-dom';
import './index.css';


const PayNow = () => {

  // using browser fetch
  const RedirectToPaymentPage = () => {
    fetch('http://localhost:9000/pay');
  };

  // using axios library
  // const RedirectToPaymentPage = () => {
  //   axios.get('http://localhost:9000/pay';
  // };

  // using browser redirect
  // const RedirectToPaymentPage = () => {
  //   window.location.href = 'http://localhost:9000/pay';
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
