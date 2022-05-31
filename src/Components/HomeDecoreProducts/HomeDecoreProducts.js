import React from 'react'
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap'
import HomeDecoreProductsSideBar from '../HomeDecoreProductsSideBar/HomeDecoreProductsSideBar'
import pic1 from '../../images/2.PNG'
import pic2 from '../../images/3.PNG'
import pic3 from '../../images/4.PNG'

const HomeDecoreProducts = () => {
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
    <div style={{ margin: '0 40px' }}>
      <Row>
        <Col className="col-3">
          <HomeDecoreProductsSideBar></HomeDecoreProductsSideBar>
        </Col>
        <Col className="col-9">
          <Row>
            <Col className="col-4 mt-4">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">Home Decor</Breadcrumb.Item>
                <Breadcrumb.Item active>Page3</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col className="col-3 mt-4">
              <Breadcrumb>
                <Breadcrumb.Item href="#">9</Breadcrumb.Item>
                <Breadcrumb.Item href="">12</Breadcrumb.Item>
                <Breadcrumb.Item active>18</Breadcrumb.Item>
                <Breadcrumb.Item active>24</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col className="col-5 mt-4">
              <div>
                <button className="border-0 me-1">
                  <img src={pic1} alt="" />
                </button>
                <button className="border-0 ms-1">
                  <img src={pic2} alt="" />
                </button>
                <button className="border-0 ms-1">
                  <img src={pic3} alt="" />
                </button>
                <span className="ms-1">Sort by latest </span>
                <select className="border-0">
                  <option></option>
                  <option>Sort by popularity</option>
                  <option>Sort by Latest</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
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
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HomeDecoreProducts
