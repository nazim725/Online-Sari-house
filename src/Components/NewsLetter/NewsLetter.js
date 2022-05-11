import React, { memo } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import './NewsLetter.css'

const NewsLetter = memo(() => {
  return (
    <div style={{ marginTop: '130px', marginBottom: '50px' }}>
      <h1 className="text-center fs-3 fw-bold">JOIN OUR NEWSLETTER NOW</h1>
      <InputGroup className="mb-3 my-4 w-50 m-auto">
        <FormControl
          placeholder="Your Email Address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="success ms-3" id="button-addon2">
          SIGN UP
        </Button>
      </InputGroup>

      <div className="m-auto w-50">
        <span className="text-secondary text-center ms-5">
          Will be used in accordance with our
        </span>
        <Button className="bg-transparent border-0 text-dark">
          Privacy Policy
        </Button>
      </div>
    </div>
  )
})

export default NewsLetter
