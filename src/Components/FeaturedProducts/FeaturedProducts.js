import React, { memo } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './FeaturedProducts.css'

const FeaturedProducts = memo(() => {
  const dress = [
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/04/BOR-100-5.jpg',
      name: 'Breezer Gown',
      details: 'Women Clothing, Long dress',
      price: '৳  1,450.00',
      productName: ' Breezer gown Product',
      category: 'western dress. Awesome color',
      combinationsDimension:
        'Full sleeve stitched Partywear Exclusive grooming sober-looking dress',
      position: '11%',
    },
    {
      img: 'https://www.oshary.com/wp-content/uploads/2022/05/SAR-100-39.png',
      name: 'Digital Print Satin Blue Saree',
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
    <div className="mt-5">
      <p className="text-center text-secondary">OSHARY ACCESSORIES</p>
      <h2 className="text-center fw-bold">FEATURED PRODUCTS</h2>
      <p className="text-center text-secondary">
        Visit our shop to see amazing creations from our designers.
      </p>
      <div className="">
        <nav className="w-50 m-auto text-center featured-nav">
          <a href="">BEST SELLER</a>
          <a href="">FEATURED</a>
          <a href="">SALES</a>
        </nav>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="carusel-item">
              {dress.map((dr) => (
                <Card style={{ minWidth: '18rem' }} className="card">
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
                      <p>{dr.details}</p>
                      <p>{dr.price}</p>
                      <div className="details">
                        <p>Product name: {dr.productName}</p>
                        <p>Category: {dr.category}</p>
                        <p>
                          Combinations Dimension: {dr.combinationsDimension}
                        </p>
                      </div>
                    </Card.Text>
                    <div className="details">
                      <div className="d-flex justify-content-around">
                        <i class="far fa-heart fs-3 mt-1"></i>
                        <Button variant="success">Add To Cart</Button>
                        <i class="fas fa-search fs-3 mt-1"></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carusel-item">
              {dress.map((dr) => (
                <Card style={{ minWidth: '18rem' }} className="card">
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
                      <p>{dr.details}</p>
                      <p>{dr.price}</p>
                      <div className="details">
                        <p>Product name: {dr.productName}</p>
                        <p>Category: {dr.category}</p>
                        <p>
                          Combinations Dimension: {dr.combinationsDimension}
                        </p>
                      </div>
                    </Card.Text>
                    <div className="details">
                      <div className="d-flex justify-content-around">
                        <i class="far fa-heart fs-3 mt-1"></i>
                        <Button variant="success">Add To Cart</Button>
                        <i class="fas fa-search fs-3 mt-1"></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carusel-item">
              {dress.map((dr) => (
                <Card style={{ minWidth: '18rem' }} className="card">
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
                      <p>{dr.details}</p>
                      <p>{dr.price}</p>
                      <div className="details">
                        <p>Product name: {dr.productName}</p>
                        <p>Category: {dr.category}</p>
                        <p>
                          Combinations Dimension: {dr.combinationsDimension}
                        </p>
                      </div>
                    </Card.Text>
                    <div className="details">
                      <div className="d-flex justify-content-around">
                        <i class="far fa-heart fs-3 mt-1"></i>
                        <Button variant="success">Add To Cart</Button>
                        <i class="fas fa-search fs-3 mt-1"></i>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
})

export default FeaturedProducts
