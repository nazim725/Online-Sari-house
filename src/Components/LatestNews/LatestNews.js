import React, { memo } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import './LatestNews.css'

const LatestNews = memo(() => {
  const news = [
    {
      img:
        'https://www.oshary.com/wp-content/uploads/2022/05/%E0%A6%A4%E0%A6%BE%E0%A6%81%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF%E0%A6%B0-%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8.jpg',
      name: 'তাঁতের শাড়ি',
      details:
        'তাঁ ত হোক বা তাঁতের শাড়ি দুটোর ইতিহাসই বেশ পুরনো। বাংলাদেশের সর্ববৃহৎ কুটিরশিল্প বা লোকশিল্প হিসেবেও তাঁত শিল্পকেই ধরা হয়। তাঁত শিল্প যেন বাঙ্গালির আভিজাত্যের এক ছোঁয়া।',
      postedBy: 'Monirul Islam',
      date: '11th  May',
      title: 'তাঁতের শাড়ির ইতিহাস, বৈশিষ্ট্য ও যত্ন',
    },
    {
      img:
        'https://www.oshary.com/wp-content/uploads/2022/05/%E0%A6%95%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%A8-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%95%E0%A6%B6%E0%A6%A8.jpg',
      name: 'কাতান শাড়ি',
      details:
        'নারী আর শাড়ি এই দুটো শব্দ যেন একই সূত্রের এপিঠ আর ওপিঠ। শাড়ির সাথে নারীর বন্ধুত্বের গল্প যেন বেশ পুরনো।',
      postedBy: 'Monirul Islam',
      date: '11th May',
      title: 'কাতান শাড়ি ডিজাইন কালেকশন ২০২২',
    },
    {
      img:
        'https://www.oshary.com/wp-content/uploads/2022/04/%E0%A6%95%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%A8-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF%E0%A6%B0-%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-%E0%A6%AC%E0%A7%88%E0%A6%B6%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%9A%E0%A7%87%E0%A6%A8%E0%A6%BE%E0%A6%B0-%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A6%AF%E0%A6%BC.jpg',
      name: 'কাতান শাড়ি',
      details:
        'বাঙালি নারী আর শাড়ি এ দুটোর ছন্দে যেমন মিল আছে তেমনি মিল আছে বাঙ্গালির ঐতিহ্যের সাথেও। বাঙালি নারীর প্রধান পোশাক হিসেবে শাড়ির স্থান বরাবরই বেশ উপরে রয়েছে।',
      postedBy: 'Monirul Islam',
      date: '30 Appril',
      title: 'কাতান শাড়ির ইতিহাস, বৈশিষ্ট্য ও চেনার উপায়',
    },
    {
      img:
        'https://www.oshary.com/wp-content/uploads/2022/04/%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%95-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%95%E0%A6%B6%E0%A6%A8-%E0%A6%93-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8.jpg',
      name: 'সিল্ক শাড়ি',
      details:
        'ইতিহাসে আড়ি পাতলেই শোনা যায় সিল্কের জয়গানের কথা। হাজার পোশাকের ভীড়ে সিল্কের গৌরব গাঁথা ইতিহাস যেন ঠিক কোন রুপকথার গল্পের মতোই শোনায় ।',
      postedBy: 'Monirul Islam',
      date: '30 Appril',
      title: 'সিল্ক শাড়ি: শাড়ি কালেকশন ও ডিজাইন',
    },
  ]
  return (
    <div style={{ marginTop: '100px' }}>
      <p className="text-center text-secondary">FURNITURE GUIDES</p>
      <h1 className="text-center text-dark fw-bold fs-2">OUR LATEST NEWS</h1>
      <p className="text-center text-secondary">
        Latest trends and inspiration in interior design.
      </p>
      <div className="mt-5">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="offer-product">
              {news
                .map((ns) => (
                  <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={ns.img} height={300} />
                    <Card.Body>
                      <div className="news-date">{ns.date}</div>
                      <div className="product-name">{ns.name}</div>
                      <Card.Title className="mt-3 fs-4 text-center">
                        {ns.title}
                      </Card.Title>
                      <Card.Text>
                        Posted By <i class="fas fa-user-circle"></i>{' '}
                        {ns.postedBy}
                        <p className="my-3 text-secondary fs-6">
                          {ns.details.slice(0, 80)}
                        </p>
                      </Card.Text>
                      <Button className="fw-bold text-secondary bg-transparent border-0 ms-4">
                        CONTINUE READING....
                      </Button>
                    </Card.Body>
                  </Card>
                ))
                .slice(0, 3)}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="offer-product">
              {news
                .map((ns) => (
                  <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={ns.img} height={300} />
                    <Card.Body>
                      <div className="news-date">{ns.date}</div>
                      <div className="product-name">{ns.name}</div>
                      <Card.Title className="mt-3 fs-4 text-center">
                        {ns.title}
                      </Card.Title>
                      <Card.Text>
                        Posted By <i class="fas fa-user-circle"></i>{' '}
                        {ns.postedBy}
                        <p className="my-3 text-secondary fs-6">
                          {ns.details.slice(0, 80)}
                        </p>
                      </Card.Text>
                      <Button className="fw-bold text-secondary bg-transparent border-0 ms-4">
                        CONTINUE READING....
                      </Button>
                    </Card.Body>
                  </Card>
                ))
                .slice(3, 5)}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
})

export default LatestNews
