import ProductCard from "./AdsCard";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import React from "react";
import vocabulary from "../../vocabulary.json";

interface IAdsCard {
  id: number
  title: string;
  img: string;
  price: number;
  description: string;
  url: string;
  city: string;
  region: string;
  date: string;
}

interface IAdsPanel {
  items?: IAdsCard[];
}

const AdsPanel = (props: IAdsPanel) => {
  const ads: IAdsCard[] | undefined = props.items;
  const [adsExist, setAdsExist] = useState<boolean>(false);
  const [averagePrice, setAveragePrice] = useState<number>(0);
  useEffect(() => {
    let sumPrices: number = 0
    if (ads instanceof Array) ads?.map((item: IAdsCard) => {
      sumPrices = sumPrices + item.price
    })
    if (ads?.length) setAveragePrice(sumPrices / ads.length);
  },[ads])

  useEffect(() => {
    if (props.items) setAdsExist(true);
  }, [props.items]);


  return (
    <React.Fragment>
      <div className={styles.ads_container}>
        {adsExist ? (
          <ul className={styles.adsList}>
            {ads?.map((item: IAdsCard) => (
              <li
                className={styles.adsItem}
                key={item.id}                
              >
                <ProductCard
                  title={item.title}
                  imgUrl={item.img}
                  price={item.price}
                  description={item.description}
                  urlAvito={item.url}
                  city={item.city}
                  region={item.region}
                  date={item.date}
                  averagePrice={averagePrice}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.ads_before_search}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="128"
              height="128"
            >
              <path
                fill="#CC163F"
                d="M256,0C114.616,0,0,114.616,0,256s114.616,256,256,256s256-114.616,256-256S397.384,0,256,0z"
              />
              <rect
                x="357.434"
                y="328.511"
                transform="matrix(-0.707 0.7072 -0.7072 -0.707 888.4547 368.3053)"
                width="21"
                height="79.367"
                fill="#262626"
              />
              <path
                fill="#ffffff"
                d="M234.848,104.256c72.152,0,130.848,58.696,130.848,130.848S307,365.952,234.848,365.952
	C162.696,365.952,104,307.256,104,235.104S162.696,104.256,234.848,104.256 M234.848,88.256C153.744,88.256,88,154,88,235.104
	s65.744,146.848,146.848,146.848s146.848-65.744,146.848-146.848C381.704,154,315.952,88.256,234.848,88.256L234.848,88.256z"
              />
              <path
                fill="#262626"
                d="M273.072,189.224h-10.216v-23.056c0-2.816-2.288-5.104-5.104-5.104h-48.096c-2.816,0-5.104,2.288-5.104,5.104v23.056
	h-10.216v-23.056c0-8.448,6.872-15.32,15.32-15.32h48.096c8.448,0,15.32,6.872,15.32,15.32V189.224z"
              />
              <path
                fill="#ffffff"
                d="M174.936,183.24l-22.96,110.872h163.448l-22.96-110.872H174.936z"
              />
              <path
                fill="#262626"
                d="M209.016,222.4c-4.928,0-8.92-4-8.92-8.928s3.992-8.928,8.92-8.928s8.92,4,8.92,8.928
	C217.928,218.4,213.936,222.4,209.016,222.4z M258.392,222.4c-4.928,0-8.92-4-8.92-8.928s3.992-8.928,8.92-8.928
	c4.928,0,8.92,4,8.92,8.928C267.304,218.4,263.312,222.4,258.392,222.4z"
              />
            </svg>
            <span className={styles.ads_before_search_text}>
              {vocabulary.adsPanel.before_search}
            </span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdsPanel;
