import React, { memo } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './Offer.css'
import OfferMenu from './OfferMenu/OfferMenu'

const Offer = memo(() => {
  const products = [
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/CHU-100-13.jpg',
      name: 'Handmade Crafted Churi',
      details: 'Women Clothing, Long dress',
      price: '৳  1,450.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '11%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/CHU-100-17.jpg',
      name: 'Handmade Crafted Churi',
      details: 'Silk Saree, Women, Eid Collection, Saree',
      price: '৳  1,450.00',
      productName: ' Chayer Ameje Eid Color',
      category:
        'Same as the picture Material: Silk , 12 haat Occasion: Casual, Party & festive',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '14%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/SAR-100-5.png',
      name: 'Chayer Ameje Eid',
      details: 'Women Clothing, Long dress',
      price: '৳  1,860.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '23%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/05/SAR-100-42.png',
      name: 'Digital Print Satin Saree',
      details: 'Women Clothing, Long dress',
      price: '৳  1,860.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '17%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/05/p-4.jpg',
      name: 'Digital Print Satin White Saree',
      details: 'Women Clothing, Long dress',
      price: '৳  1,860.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '21%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/BOR-100-2.jpg',
      name: 'Embroidery Arabian borkha',
      details: 'Women Clothing, Long dress',
      price: '৳  1,860.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '14%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/05/SAR-100-57.png',
      name: 'Embroidery Arabian borkha',
      details: 'Women Clothing, Long dress',
      price: '৳  1,860.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '31%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/05/SAR-100-59.png',
      name: 'Pushpa Blue Saree',
      details: 'Women Clothing, Long dress',
      price: '৳  1,860.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '11%',
    },
  ]
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <div className="offer">
              <img
                src="https://samyakkimg.gumlet.io/catalog/product/s/h/sha4833_1.jpg?w=360&dpr=1.0"
                alt=""
                height={430}
                width={270}
              />
              <div className="offer-details p-3">
                <h5 className="text-start text-secondary fs-5">Women Sari</h5>
                <h2 className="text-start text-light fw-bold fs-2">
                  High quality women saree
                </h2>
                <p className="text-start text-light fs-6">Offer Available</p>
                <button className="view-button text-light fw-bold">
                  View More
                </button>
              </div>
            </div>
            <div className="offer mt-4">
              <img
                src="https://www.oshary.com/wp-content/uploads/2022/05/p-2-430x491.jpg"
                alt=""
                height={430}
                width={270}
              />
              <div className="offer-details p-3">
                <h5 className="text-start text-secondary fs-5">
                  Women Clothing
                </h5>
                <h2 className="text-start text-light fw-bold fs-2">
                  Women Clothing With 10% Discount
                </h2>
                <p className="text-start text-light fs-6">Shop Now</p>
                <button className="view-button text-light fw-bold">
                  View More
                </button>
              </div>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <OfferMenu></OfferMenu>
            <div className="offer-item">
              {products.map((dr) => (
                <Card style={{ minWidth: '14rem' }} className="card">
                  <Card.Img
                    variant="top"
                    src={dr.img}
                    height={300}
                    className="p-2 card-img"
                  />
                  <Card.Body>
                    <div className="card-position text-center fw-bold text-white">
                      <p className="pt-2">{dr.position}</p>
                    </div>
                    <div className="compare">
                      <i class="fas fa-times "></i>
                    </div>
                    <Card.Title>{dr.name}</Card.Title>
                    <Card.Text>
                      {dr.details} <br />
                      {dr.price}
                      <div className="details">
                        <p className="fs-6">Product name: {dr.productName}</p>
                        <p>Category: {dr.category}</p>
                      </div>
                    </Card.Text>
                    <div className="details">
                      <div className="d-flex justify-content-around">
                        <i class="far fa-heart fs-3 mt-1"></i>
                        <Button variant="success bg-transparent border-0 ">
                          <i class="fas fa-shopping-cart text-dark "></i>
                        </Button>
                        <i class="fas fa-search fs-3 mt-1"></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
})

export default Offer
