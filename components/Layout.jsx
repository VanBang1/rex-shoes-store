import React from 'react';
import Head from 'next/head';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>R.E.X -Giày chính hãng uy tín</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
        <Footer />
        <MessengerCustomerChat />

    </div>
  )
}

export default Layout;