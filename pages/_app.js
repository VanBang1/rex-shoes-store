import React from 'react';
import { Toaster } from 'react-hot-toast';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
      <MessengerCustomerChat
    pageId="104802149052546"
    appId="2161350964064648"/>
    </StateContext>
  )
}

export default MyApp;