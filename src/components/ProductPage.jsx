import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const Header = styled.header`
  background: ${props => props.theme.headerBg};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background: ${props => props.theme.buttonBg};
  color: ${props => props.theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.theme.buttonHoverBg};
  }
`;

const ProductContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageGallery = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProductInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.heading};
  }

  .price {
    font-size: 2rem;
    color: ${props => props.theme.price};
    margin: 1rem 0;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 2rem 0;
    color: ${props => props.theme.text};
  }

  .features {
    margin: 2rem 0;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: ${props => props.theme.heading};
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;

        &:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: ${props => props.theme.accent};
        }
      }
    }
  }
`;

const BuyButton = styled.button`
  background: ${props => props.theme.buttonBg};
  color: ${props => props.theme.buttonText};
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.theme.buttonHoverBg};
  }
`;

const ProductPage = ({ product, theme, onBack }) => {
  return (
    <PageContainer theme={theme}>
      <Header theme={theme}>
        <BackButton theme={theme} onClick={onBack}>
          ← Back to Products
        </BackButton>
      </Header>
      <ProductContent>
        <ImageGallery>
          <img
            src={`./src/images/${product.name} 2.JPG`}
            alt={product.name}
          />
        </ImageGallery>
        <ProductInfo theme={theme}>
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.fullDescription}</p>
          <div className="features">
            <h2>Features</h2>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <BuyButton theme={theme}>Add to Cart</BuyButton>
        </ProductInfo>
      </ProductContent>
    </PageContainer>
  );
};

export default ProductPage;