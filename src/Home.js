import React from "react";
import "./Home.css";
import Product from "./Product";
import { useState } from 'react';

const productData = [
    {
      id: 1,
      name: 'In a Trance Eyeshadow Palette (Red, Baby Blue, Mint, Purple) by ColourPop',
      price: 27,
      rating: 5,
      colors: ['rgb(255, 108, 108)', 'rgb(145, 194, 255)', 'rgb(100, 218, 206)', 'rgb(207, 103, 223)'],
      checkImg: {
        'rgb(255, 108, 108)': true,
        'rgb(145, 194, 255)': false,
        'rgb(100, 218, 206)': false,
        'rgb(207, 103, 223)': false,
      },
  
      linkImg: {
        'rgb(255, 108, 108)': 'https://cdn.shopify.com/s/files/1/1338/0845/products/Chili-Main-Squeeze-Duo-Main_96d6c5e6-d0aa-4c4f-9025-4c3d1cbf294f.jpg?v=1645661268',
        'rgb(145, 194, 255)': 'https://www.refinery29.com/images/10457108.jpg',
        'rgb(100, 218, 206)': 'https://cdn.shopify.com/s/files/1/1338/0845/products/Mint-To-Be-UC.jpg?v=1645661375',
        'rgb(207, 103, 223)': 'https://cdn.shopify.com/s/files/1/1338/0845/products/Its-My-Pleasure-Reshoot.jpg?v=1645662008',
      },
    },
    {
      id: 2,
      name: 'Lux Lipstick (Burgundy, Wine, Malibu) by ColourPop',
      price: 15,
      rating: 5,
      colors: ['rgb(255, 108, 108)', 'rgb(168, 65, 65)', 'rgb(244, 138, 244)'],
      checkImg: {
        'rgb(255, 108, 108)': true,
        'rgb(168, 65, 65)': false,
        'rgb(244, 138, 244)': false,
      },
  
      linkImg: {
        'rgb(255, 108, 108)': 'https://cdn.shopify.com/s/files/1/1338/0845/products/Lip_Kit_flatlay_Hello_Angel_009_1_680x.jpg?v=1655933369',
        'rgb(168, 65, 65)': 'https://cdn.shopify.com/s/files/1/1338/0845/products/Lip_Kit_flatlay_Old_Fame_002_1_680x.jpg?v=1655925375',
        'rgb(244, 138, 244)': 'https://cdn.shopify.com/s/files/1/1338/0845/products/Lip_Kit_flatlay_So_Dengerous_002_1_680x.jpg?v=1655933619',
      },
    },
    {
      id: 3,
      name: 'Fabulips Overnight Lip Mask by Bliss',
      price: 15,
      rating: 4,
      colors: ['transparent'],
      checkImg: {
          'transparent': true,
      },
      linkImg: {
          'transparent': 'https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/421/1478/Overnight_Mask_Front__83087.1662747793.jpg?c=2',
      },
    },
    {
      id: 4,
      name: 'Jelly-Glow Gentle Exfoliator Peel by Bliss',
      price: 15,
      rating: 4,
      colors: ['transparent'],
      checkImg: {
          'transparent': true,
      },
      linkImg: {
          'transparent': 'https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1280x1280/products/367/988/jelly_glow_peel_sku_1003_30046_01__72089.1650321452.jpg?c=2',
      },
    },
];

function Home() {

  const [prod, setProd] = useState(productData);
  const handleChooseColor = (id, color) => {
    setProd((prev) => {
    return prev.map((prods) => {
        if (prods.id === id) {
        let newCheckImg = {};
        Object.keys(prods.checkImg).map((item) => {
            prods.checkImg[item] = false;
            newCheckImg = { ...prods.checkImg, [color]: true };
            return null;
        });

        return { ...prods, checkImg: newCheckImg };
        } else {
        return prods;
        }
    });
    });
  };

  return (
    <div className="home">
        <div className="home__container">

        {prod.map((prods) => (
        <div key={prods.id} className="home__row Products">
          {Object.keys(prods.checkImg).map((item) => {
            if (prods.checkImg[item]) {
              return (
                <div className="home__row">
                <Product
                  id={prods.id}
                  title={prods.name}
                  price={prods.price}
                  rating={prods.rating}
                  key={item}
                  image={prods.linkImg[item]}
                  className="img"
                  colors={prods.colors}
                  checkImg={prods.checkImg}
                />
                </div>
              );
            } else {
              return null;
            }
          })}

        <div className="colors1">
            {prods.colors.map((color) => (
              <p
                key={color}
                className={` ${prods.checkImg[color] && 'active'}   `}
                style={{
                  backgroundColor: color,
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={() => handleChooseColor(prods.id, color)}
              ></p>
            ))}
        </div>
          
        </div>
        ))}

        </div>   
    </div> 
  )
}

export default Home;
