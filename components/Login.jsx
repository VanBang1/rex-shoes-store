import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
  return (
    
    <div className="layout">
    <Head>
      <title>R.E.X -Giày chính hãng uy tín</title>
    </Head>
    <header>
    <div>Login</div>
      <Navbar />
    </header>
    <main className="main-container">
      {children}
    </main>
      <Footer />

  </div>
  )
}

export default Login