import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';


const renderReactDom = () => {
  ReactDOM.render(
    <HashRouter basename='/'>
      <App />
    </HashRouter>,
    document.getElementById('root')
  );
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
