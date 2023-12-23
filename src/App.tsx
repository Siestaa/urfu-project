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
  const [adsArray, setAdsArray] = useState<IAdsCard[] | undefined>()

  const handleSetAds = (newAds: IAdsCard[]) => {
    setAdsArray(newAds)
  }

  return (
    <>
      <SearchPanel setAdsArray={handleSetAds} />
      <AdsPanel items={adsArray}/>      
    </>
  );
}

export default App;
