import React from 'react'
import './PriceSlider.css'

const PriceSlider = () => {
  var minSlider = document.getElementById('min')
  var maxSlider = document.getElementById('max')
  var outputMin = document.getElementById('min-value')
  var outputMax = document.getElementById('max-value')

  //   outputMin.innerHTML = minSlider.value
  //   outputMax.innerHTML = maxSlider.value

  //   minSlider.oninput = function () {
  //     outputMin.innerHTML = this.value
  //   }
  //   maxSlider.oninput = function () {
  //     outputMax.innerHTML = this.value
  //   }
  return (
    <div>
      {/* -- */}
      <h5 className='text-start mt-4'>FILTER BY PRICE</h5>

      <div className="min-max-range">
        <input
          type="range"
          min="0"
          max="5000"
          value="2000"
          class="range"
          id="min"
        />
        <input
          type="range"
          min="5001"
          max="10000"
          value="8000"
          class="range"
          id="max"
        />
      </div>
      <div className="d-flex">
        <div className="min-max">
          <div className="min">
            <label>Price: </label> <span id="min-value ms-5"> &nbsp;&nbsp; $ 800</span>
            <span>-</span>
            <span id="max-value">&nbsp;&nbsp;$ 2800</span>
          </div>
        </div>
        <button
          className=" ms-4"
          style={{ width: '80px', height: '30px',border:0,marginTop:'23px' }}
        >
          FILTER
        </button>
      </div>

      {/* -- */}
      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default PriceSlider
