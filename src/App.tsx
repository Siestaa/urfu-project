import { useState } from "react";
import"./App.css";
import AdsPanel from "./components/AdsPanel/AdsPanel";
import SearchPanel from "./components/SearchPanel/SearchPanel";


const App = () => {
  const [adsArray, setAdsArray] = useState<any>([])

  const handleSetAds = (newAds) => {
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
