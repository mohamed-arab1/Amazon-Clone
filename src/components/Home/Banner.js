import React, { useState } from 'react'
import Slider from 'react-slick/lib/slider';
import { 
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive
 } from '../../assets/index';

const Banner = () => {
    const [dotActive, setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
            setDotActive(next)
        },
        appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: '75%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '210px'
              }}
            >
              <ul style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
              }}> {dots} </ul>
            </div>
          ),
            customPaging: i => (
              <div
                style={
                  i === dotActive 
                  ? {
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      background: "#131921",
                      padding: "8px 0",
                      cursor: "pointer",
                      border: "1px solid #f3a847",
                    } 
                  : {
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#232F3E",
                      color: "white",
                      padding: "8px 0",
                      cursor: "pointer",
                      border: "1px solid white",
                    }
                }
              >
                {i + 1}
              </div>
            ),
          responsive:[
            {
              breakpoint: 576,
              settings: {
                dots: true,
                appendDots: dots => (
                  <div
                    style={{
                      position: 'absolute',
                      top: '70%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '150px'
                    }}
                  >
                    <ul style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    }}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div
                    style={
                      i === dotActive 
                      ? {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          background: "#131921",
                          padding: "8px 0",
                          cursor: "pointer",
                          border: "1px solid #f3a847",
                        } 
                      : {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#232F3E",
                          color: "white",
                          padding: "8px 0",
                          cursor: "pointer",
                          border: "1px solid white",
                        }
                    }
                  >
                    {i + 1}
                  </div>
                ),
              }
            }
          ]
      }
  return (
    <div className='w-full'>
        <div className='w-full h-full relative'>
            <Slider {...settings} >
                <div>
                    <img src={bannerImgOne} alt="banner_image"/>
                </div>
                <div>
                    <img src={bannerImgTwo} alt="banner_image" />
                </div>
                <div>
                    <img src={bannerImgThree} alt="banner_image" />
                </div>
                <div>
                    <img src={bannerImgFour} alt="banner_image" />
                </div>
                <div>
                    <img src={bannerImgFive} alt="banner_image" />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Banner