import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

import CurrencyFormat from 'react-currency-format';

const Product = ({ product: { image, name, slug, price,} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <CurrencyFormat className="product-price" value={price} displayType="text" thousandSeparator={true} /> <u> vnđ</u>
        </div>
      </Link>
    </div>
  )
}

export default Product