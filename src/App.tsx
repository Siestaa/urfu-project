import { useState } from "react";
import"./App.css";
import AdsPanel from "./components/AdsPanel/AdsPanel";
import SearchPanel from "./components/SearchPanel/SearchPanel";

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

const App = () => {
  const [adsArray, setAdsArray] = useState<IAdsCard[] | undefined>();
  const [averagePrice, setAveragePrice] = useState<number>(0);

  const handleSetAds = (newAds: IAdsCard[], averagePrice: number) => {
    setAdsArray(newAds)
    setAveragePrice(averagePrice)
  }

  return (
    <>
      <SearchPanel setAdsArray={handleSetAds} />
      <AdsPanel items={adsArray} averagePrice={averagePrice}/>      
    </>
  );
}

export default App;
