import React, { memo } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './ArrivalProducts.css'
import Slide from 'react-reveal/Slide'

const ArrivalProducts = memo(() => {
  const arrival = [
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/SAR-100-5.png',
      name: 'Chayer Ameje Eid',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-34%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/SAR-100-6.jpg',
      name: 'Sahitte Eid',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-11%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/SAR-100-4.jpg',
      name: 'Shohore Eid',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-13%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/SAR-100-3.jpg',
      name: 'Shimol Eid',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-34%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/SAR-100-2.jpg',
      name: 'Rangga Saree',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-36%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/BOR-100-2.jpg',
      name: ' Arabian borkha',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-31%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/BOR-100-1.png',
      name: 'Skirt and Tops',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-17%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/BOR-100-3.jpg',
      name: 'Rani Borka',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳ 1,860.00',
      position: '-20%',
    },
  ]
  return (
    <div className="my-5">
      <h1 className="text-center my-5">New Arrival Products</h1>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <div className="arrival-products">
              {arrival.map((product) => (
                <Card style={{ width: '18rem' }} className="product-card">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Slide right>
                      <div className="side-icon">
                        <i class="fas fa-times fs-3"></i>
                        <br />
                        <i class="fas fa-search fs-3 mt-2"></i>
                        <br />
                        <i class="far fa-heart fs-3 mt-2"></i>
                        <br />
                      </div>
                    </Slide>

                    <div className="card-position text-center fw-bold text-white">
                      <p className="pt-2">{product.position}</p>
                    </div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.details}</Card.Text>
                    <Button variant="secondary w-50 price-button">
                      {product.price}
                    </Button>
                    <br />

                    <Button variant="secondary w-50 add-button">
                      ADD TO CART
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
          <Col sm={4}>sm=4</Col>
        </Row>
      </Container>
    </div>
  )
})

export default ArrivalProducts
