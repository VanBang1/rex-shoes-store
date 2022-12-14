import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Footer } from '../components';


const Home = ({ products,products2,bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Giày</h2>
      <p>Đa số tình trạng vẫn còn mới, không hộp</p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    <div className="products-heading">
      <h2>Phụ kiện</h2>
      <p>Túi xách, nón</p>
    </div>
    <div className="products-container">
      {products2?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
    </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product" && type ==giay]';
  const products = await client.fetch(query);

  const querypk = '*[_type == "product" && type =="pk"]';
  const products2 = await client.fetch(querypk);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products,products2, bannerData }
  }
}

export default Home;