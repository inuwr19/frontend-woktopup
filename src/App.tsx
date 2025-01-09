// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
// import { GameDetail } from './pages/GameDetail';
import { Cart } from './pages/Cart';
// import { Checkout } from './pages/Checkout';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { AuthProvider } from './components/auth/AuthContext'; // Import AuthProvider
import { GameDetail } from './components/game/GameDetail';
import { OrderSummary } from './components/checkout/OrderSummary';


export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/summary/:orderId" element={<OrderSummary />} />
              <Route path="/games/:id" element={<GameDetail />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>

  );
}