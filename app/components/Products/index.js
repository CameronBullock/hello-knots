import React from 'react';

import { Product, Price, Name, ProductImage, ProductText, Container } from './styles';

const Products = () => (
  <Container>
    <Product>
      <ProductImage src="https://helloknots.com/wp-content/uploads/2017/02/schoolgirl183.jpg" alt=""/>
      <ProductText>
        <Name>Product Name</Name>
        <Price>$10</Price>
      </ProductText>
    </Product>

    <Product>
      <ProductImage src="https://helloknots.com/wp-content/uploads/2017/02/Leather-Bows149.jpg" alt=""/>
      <ProductText>
        <Name>Product Name</Name>
        <Price>$10</Price>
      </ProductText>
    </Product>

    <Product>
      <ProductImage src="https://helloknots.com/wp-content/uploads/2017/02/Strawberry-Sailor155.jpg" alt=""/>
      <ProductText>
        <Name>Product Name</Name>
        <Price>$10</Price>
      </ProductText>
    </Product>

  </Container>
);

export default Products;
