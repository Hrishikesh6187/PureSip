import React, { useState } from 'react'
import styled from 'styled-components'
import ProductPage from './components/ProductPage'
import { productThemes, productDescriptions } from './themes/productThemes'

const Header = styled.header`
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2196f3;
  font-size: 1.5rem;
  font-weight: bold;

  img {
    height: 32px;
    width: auto;
  }
`

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  a {
    color: #2196f3;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #1976d2;
      text-decoration: none;
    }
  }
`

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`

const HeroSection = styled(Section)`
  background: #f8f9fa;
  color: #333;
  padding: 6rem 2rem;
  text-align: left;

  .hero-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .hero-content {
    flex: 1;
    max-width: 600px;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: #1a4a7c;
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    color: #2c5282;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .shop-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: #2196f3;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 500;
    transition: background 0.3s ease;

    &:hover {
      background: #1976d2;
    }
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  .image-placeholder {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
  }
`

const MissionSection = styled(Section)`
  background: #f8f9fa;
  color: #333;
  padding: 6rem 2rem;
  text-align: left;

  .mission-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .mission-content {
    flex: 1;
    max-width: 600px;
  }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: #1a4a7c;
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    color: #2c5282;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .mission-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  }
`

const ProductsSection = styled(Section)`
  background: #f8f9fa;
  padding: 6rem 2rem;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #2196f3;
    font-weight: 600;
  }

  p.subtitle {
    color: #2c5282;
    font-size: 1.2rem;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  .row-1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .row-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;
  }
`

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  .content {
    padding: 0 1.5rem 1.5rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: #1a4a7c;
    font-weight: 600;
  }

  p {
    color: #2c5282;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .price {
    color: #38a169;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: auto;
  }
`

const Footer = styled.footer`
  background: #1976d2;
  color: white;
  padding: 2rem;
  text-align: center;

  p {
    margin: 0.5rem 0;
  }
`

const products = [
  { name: 'Alpine Pro', price: 49.99, description: 'Perfect for hiking and outdoor adventures' },
  { name: 'Urban Elite', price: 39.99, description: 'Sleek design for everyday use' },
  { name: 'Sport Max', price: 59.99, description: 'Ideal for intense workouts' },
  { name: 'Eco Warrior', price: 44.99, description: 'Made from 100% recycled aluminum' },
  { name: 'Adventure X', price: 64.99, description: 'Extra-large capacity for long journeys' },
]

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (product) => {
    const enrichedProduct = {
      ...product,
      fullDescription: productDescriptions[product.name].fullDescription,
      features: productDescriptions[product.name].features
    }
    setSelectedProduct(enrichedProduct)
  }

  if (selectedProduct) {
    return (
      <ProductPage
        product={selectedProduct}
        theme={productThemes[selectedProduct.name]}
        onBack={() => setSelectedProduct(null)}
      />
    )
  }

  return (
    <div>
      <Header>
        <Logo>
          <img src="./src/images/Logo.png" alt="PureSip Logo" />
          PureSip
        </Logo>
        <Nav>
          <ul>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </Nav>
      </Header>

      <HeroSection>
        <div className="hero-container">
          <div className="hero-image">
            <img src="./src/images/Main.JPG" alt="PureSip Water Bottle" />
          </div>
          <div className="hero-content">
            <h1>Hrishi Prahalad</h1>
            <p>At PureSip, we're dedicated to sustainability in every sip. Premium aluminum bottles, designed for those who care about both performance and the planet.</p>
            <a href="#products" className="shop-button">Shop Now</a>
          </div>
        </div>
      </HeroSection>

      <ProductsSection id="products">
        <h2>Our Products</h2>
        <p className="subtitle">Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.</p>
        <ProductGrid>
          <div className="row-1">
            {products
              .sort((a, b) => b.price - a.price)
              .slice(0, 3)
              .map((product, index) => (
            <ProductCard key={index} onClick={() => handleProductClick(product)}>
              <img src={`./src/images/${product.name}.JPG`} alt={product.name} />
              <div className="content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
              </div>
            </ProductCard>
          ))}
          </div>
          <div className="row-2">
            {products
              .sort((a, b) => b.price - a.price)
              .slice(3, 5)
              .map((product, index) => (
                <ProductCard key={index} onClick={() => handleProductClick(product)}>
                  <img src={`./src/images/${product.name}.jpeg`} alt={product.name} />
                  <div className="content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price">${product.price}</p>
                  </div>
                </ProductCard>
              ))}
          </div>
        </ProductGrid>
      </ProductsSection>

      <MissionSection id="mission">
        <div className="mission-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At PureSip, we believe that every sip counts. Our premium aluminum water bottles are more than just containers - 
              they're a statement of commitment to our planet's future. By choosing PureSip, you're joining a movement of 
              conscious consumers who understand that small changes lead to big impact.
            </p>
            <p>
              We've dedicated ourselves to creating products that combine exceptional design with environmental responsibility. 
              Each bottle represents our pledge to reduce plastic waste and promote sustainable living, without compromising on 
              style or performance.
            </p>
          </div>
          <div className="mission-image">
            <img src="./src/images/Eco Warrior.JPG" alt="PureSip Eco Warrior Bottle" />
          </div>
        </div>
      </MissionSection>

      <Footer id="contact">
        <p>© 2023 PureSip. All rights reserved.</p>
        <p>Address: 123 Street, Greenville SC</p>
        <p>Contact: PureSip@gmail.com</p>
      </Footer>
    </div>
  )
}

export default App