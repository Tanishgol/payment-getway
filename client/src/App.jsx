import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import HomePage from './components/Home/HomePage'
import MenuPage from './components/Menu/MenuPage'
import CheckoutPage from './components/Checkout/CheckoutPage'
import ContactPage from './components/Contact/ContactPage'
import { CartProvider } from './Components/cart/cartcontext'
export function App() {
  return (
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-amber-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
  )
}
