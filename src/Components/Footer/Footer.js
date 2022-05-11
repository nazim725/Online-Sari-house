import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = memo(() => {
  return (
    <div style={{ marginTop: '120px' }}>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <img src={logo} alt="" width={170} />
            <p> House Anjuman-132 Darussalam, Kallyanpur, Dhaka-1216</p>
            <p> Phone: +880-1317-808414</p>
            <p> Email: support@oshary.com</p>
          </Col>
          <Col sm={12} md={3}>
            <h5 className="mb-4">RECENT POSTS</h5>
            <div className="d-flex gap-2">
              <img
                src="https://www.oshary.com/wp-content/uploads/elementor/thumbs/%E0%A6%A4%E0%A6%BE%E0%A6%81%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF%E0%A6%B0-%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-pons9im6y921lfsxhrpid0dkztlnf5iq6pjjayc7iw.jpg"
                alt=""
                width={120}
                height={85}
              />
              <div>
                <p className="footer-post">
                  তাঁতের শাড়ির ইতিহাস, বৈশিষ্ট্য ও যত্ন
                </p>
                <p className="footer-post">
                  May 11, 2022 <br /> No Comments
                </p>
              </div>
            </div>

            <div className="d-flex gap-2">
              <img
                src="https://www.oshary.com/wp-content/uploads/elementor/thumbs/%E0%A6%95%E0%A6%BE%E0%A6%A4%E0%A6%BE%E0%A6%A8-%E0%A6%B6%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF-%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%95%E0%A6%B6%E0%A6%A8-ponoj7geeh72naw9rpom2wih9rljk4bh1xpunlhcm0.jpg"
                alt=""
                width={120}
                height={85}
              />
              <div>
                <p className="footer-post">কাতান শাড়ি ডিজাইন কালেকশন ২০২২</p>
                <p className="footer-post">
                  May 11, 2022 <br /> No Comments
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2}>
            <h5 className="mb-4">OUR STORES</h5>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Bangladesh
              </a>
            </p>
          </Col>
          <Col sm={12} md={2}>
            <h5 className="mb-4">USEFUL LINKS</h5>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Terms & Conditions
              </a>
            </p>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Refund and Returns policy
              </a>
            </p>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Contact Us
              </a>
            </p>
          </Col>
          <Col sm={12} md={2}>
            <h5 className="mb-4">FOOTER MENU</h5>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Facebook Profile
              </a>
            </p>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Pinterest profile
              </a>
            </p>
            <p>
              <a href="" className="text-decoration-none text-dark">
                YouTube profile
              </a>
            </p>
            <p>
              <a href="" className="text-decoration-none text-dark">
                Instagram profile
              </a>
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <div className="d-flex justify-content-between pb-4">
            <p>Oshary @ 2022 CREATED BY Oshary.com.</p>
            <img
              src="https://www.oshary.com/wp-content/themes/woodmart/images/payments.png"
              alt=""
            />
          </div>
        </Row>
      </Container>
    </div>
  )
})

export default Footer
