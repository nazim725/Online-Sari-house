import React from 'react'
import PriceSlider from '../PriceSlider'
import './HomeDecoreProductsSideBar.css'
import brand from '../../images/logo.png'

const HomeDecoreProductsSideBar = () => {
  return (
    <div>
      <PriceSlider />
      <div>
        <h5 className="text-start mt-4">FILTER BY SIZE</h5>
        <div className="d-flex justify-content-between mt-4">
          <p className="fw-bold">L</p>
          <button
            style={{
              width: '35px',
              height: '30px',
              border: '0',
              borderRadius: '10px',
            }}
          >
            2
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold">M</p>
          <button
            style={{
              width: '35px',
              height: '30px',
              border: '0',
              borderRadius: '10px',
            }}
          >
            2
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold">S</p>
          <button
            style={{
              width: '35px',
              height: '30px',
              border: '0',
              borderRadius: '10px',
            }}
          >
            2
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold">SX</p>
          <button
            style={{
              width: '35px',
              height: '30px',
              border: '0',
              borderRadius: '10px',
            }}
          >
            2
          </button>
        </div>
      </div>

      {/* --------- */}
      <div>
        <h5 className="text-start mt-4">FILTER BY BRAND</h5>
        <img src={brand} alt="" height={50} width={100} />
      </div>

      {/* ------------------- */}
      <div>
        <h5 className="text-start mt-4">STOCK STATUS</h5>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label className="ms-2">ON SALE </label> <br />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label className="ms-2">IN STACK</label>
      </div>
      {/* ------------- */}
      <div>
        <h5 className="text-start mt-4">TOP RATED PRODUCTS</h5>
        <div className="d-flex">
          <img
            src="https://www.oshary.com/wp-content/uploads/2022/05/SAR-100-48-1-430x430.png"
            alt=""
            width="120px"
            height={70}
          />
          <div>
            <h5 className="text-start ms-2">Venilli Saree Red</h5>
            <p className="text-start ms-2">৳ 2,500.00</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <img
            src="https://www.oshary.com/wp-content/uploads/2022/05/SAR-100-14-1-430x573.png"
            alt=""
            width="120px"
            height={70}
          />
          <div>
            <h5 className="text-start ms-2">Venilli Saree Red</h5>
            <p className="text-start ms-2">৳ 2,500.00</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <img
            src="https://www.oshary.com/wp-content/uploads/2022/05/JE-100-25-430x433.png"
            alt=""
            width="120px"
            height={70}
          />
          <div>
            <h5 className="text-start ms-2">Venilli Saree Red</h5>
            <p className="text-start ms-2">৳ 2,500.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDecoreProductsSideBar
