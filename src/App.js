import logo from './insurance-avenue-logo.jpg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" >
        <div className="container">
          <NavbarBrand href="/">
            <img src={logo} className="logo" alt="logo" />
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;