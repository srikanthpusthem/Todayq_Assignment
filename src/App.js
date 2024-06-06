import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContentForm from './components/ContentForm';
import Cart from './components/Cart';
import FloatingButton from './components/FloatingButton';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/submit" component={ContentForm} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <FloatingButton />
      </Router>
    </CartProvider>
  );
}

export default App;
