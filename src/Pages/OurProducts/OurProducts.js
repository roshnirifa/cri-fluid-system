import React from 'react';
import './OurProducts.css'
import productImg from '../assets/3.png'

const OurProducts = () => {
    return (
        <div className='ourProducts-container'>
            <p className='ourProducts-heading'>Installed over 10 Lacks Star Rated Pumpsets Acroos The country resulting in a cumulative saving of more than 9,000 million units of power the nation</p>
            <img src={productImg} alt="" />
            <p className='products-types'>Valves- Pumps- pipes- iot drives & controlles wire & cables- solor system - motors</p>
            <hr />

            <h3 className='heading-text'>
                c.r.i. fluid system products cater to diveres segments
            </h3>
            <p>chemicals & process<span class="vl"></span>
                power<span className='vl'></span>
                water &waste water<span className="vl"></span>
                oils &gas<span className="vl"></span>
                pharma<span className="vl"></span>
                sugur & distilleries<span className="vl"></span>
                paper &pulp<span className="vl"></span>
                marine &defence<span className="vl"></span>
                food & beverage<span className="vl"></span>
                <div>
                    <p>petrochemical & refineries <span className="vl"></span>
                        solar<span className="vl"></span>
                        building<span className="vl"></span>
                        hvac<span className="vl"></span>
                        fire fighting<span className="vl"></span>
                        agriculture residential

                    </p>
                </div>

            </p>

        </div>
    );
};

export default OurProducts;